const SMTP2GO_ENDPOINT = "https://api.smtp2go.com/v3/email/send";

const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  },
  body: JSON.stringify(body),
});

const clean = (value, maxLength) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const escapeHtml = (value) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character]);

const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && !/[\r\n]/.test(value);

const isIsoDate = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value);

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return jsonResponse(204, {});
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { message: "Povolená je iba metóda POST." });
  }

  const apiKey = process.env.SMTP2GO_API_KEY;
  const sender = process.env.SMTP2GO_SENDER;
  const recipients = (process.env.CONTACT_FORM_RECIPIENT || "")
    .split(/[;,]/)
    .map((recipient) => recipient.trim())
    .filter(Boolean);

  if (!apiKey || !sender || recipients.length === 0) {
    console.error("Contact function is missing required SMTP2GO environment variables.");
    return jsonResponse(503, { message: "E-mailová služba zatiaľ nie je nakonfigurovaná." });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { message: "Neplatný formát požiadavky." });
  }

  // Honeypot: bots commonly fill fields that are hidden from real visitors.
  if (clean(payload.company, 200)) {
    return jsonResponse(200, { message: "Ďakujeme. Váš dopyt bol úspešne odoslaný." });
  }

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 254);
  const phone = clean(payload.phone, 30);
  const from = clean(payload.from, 10);
  const to = clean(payload.to, 10);
  const message = clean(payload.message, 2000);

  if (!name || !isEmail(email) || !phone || !isIsoDate(from) || !isIsoDate(to)) {
    return jsonResponse(400, { message: "Vyplňte, prosím, všetky povinné údaje v správnom formáte." });
  }

  if (from > to) {
    return jsonResponse(400, { message: "Dátum vrátenia nemôže byť pred dátumom prevzatia." });
  }

  const textBody = [
    "Nový dopyt z pozicajdodavku.sk",
    "",
    `Meno: ${name}`,
    `E-mail: ${email}`,
    `Telefón: ${phone}`,
    `Termín: ${from} – ${to}`,
    `Poznámka: ${message || "Bez poznámky"}`,
  ].join("\n");

  const htmlBody = `
    <h2>Nový dopyt z pozicajdodavku.sk</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif">
      <tr><td style="padding:6px 14px 6px 0"><strong>Meno</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:6px 14px 6px 0"><strong>E-mail</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td style="padding:6px 14px 6px 0"><strong>Telefón</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td style="padding:6px 14px 6px 0"><strong>Termín</strong></td><td>${escapeHtml(from)} – ${escapeHtml(to)}</td></tr>
      <tr><td style="padding:6px 14px 6px 0;vertical-align:top"><strong>Poznámka</strong></td><td>${escapeHtml(message || "Bez poznámky").replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;

  try {
    const smtpResponse = await fetch(SMTP2GO_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Smtp2go-Api-Key": apiKey,
      },
      body: JSON.stringify({
        sender,
        to: recipients,
        subject: `Nový dopyt na prenájom – ${name}`,
        text_body: textBody,
        html_body: htmlBody,
        custom_headers: [{ header: "Reply-To", value: email }],
      }),
    });

    const smtpResult = await smtpResponse.json().catch(() => ({}));
    const failed = Number(smtpResult?.data?.failed || 0);

    if (!smtpResponse.ok || failed > 0) {
      console.error("SMTP2GO rejected contact form email.", {
        status: smtpResponse.status,
        requestId: smtpResult?.request_id,
        error: smtpResult?.data?.error,
        failures: smtpResult?.data?.failures,
      });
      return jsonResponse(502, { message: "E-mail sa nepodarilo odoslať. Skúste to znova alebo nám zavolajte." });
    }

    return jsonResponse(200, { message: "Ďakujeme. Váš dopyt bol úspešne odoslaný." });
  } catch (error) {
    console.error("SMTP2GO request failed.", error);
    return jsonResponse(502, { message: "E-mail sa nepodarilo odoslať. Skúste to znova alebo nám zavolajte." });
  }
};

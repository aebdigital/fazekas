# SMTP2GO contact form setup

The reservation form sends email through a Netlify Function and the SMTP2GO API. Secrets are read only by the serverless function and are never exposed to the browser.

## 1. Configure SMTP2GO

1. Create an SMTP2GO API key with permission to send email.
2. Verify the sender address or sender domain in SMTP2GO.
3. Keep the API key private. Do not commit it to Git.

## 2. Add Netlify environment variables

In Netlify, open **Project configuration → Environment variables** and add:

| Variable | Purpose | Example |
| --- | --- | --- |
| `CONTACT_FORM_RECIPIENT` | Address that receives reservation requests | `rezervacie@example.com` |
| `SMTP2GO_API_KEY` | SMTP2GO API key | `api-xxxxxxxx...` |
| `SMTP2GO_SENDER` | Verified sender used in the From header | `Požičaj si ma <noreply@example.com>` |

`CONTACT_FORM_RECIPIENT` may contain multiple addresses separated by commas or semicolons.

After adding or changing variables, trigger a new production deploy.

## 3. How the form works

1. `components/booking-form.tsx` validates the browser form and sends JSON to `/api/contact`.
2. `netlify.toml` rewrites `/api/contact` to `/.netlify/functions/contact`.
3. `netlify/functions/contact.js` validates and sanitizes the data.
4. The function calls `https://api.smtp2go.com/v3/email/send`.
5. The outgoing email includes `Reply-To` with the visitor's email address, so replying in the mailbox answers the visitor directly.
6. The form shows loading, success, and error messages without reloading the page.

## 4. Local testing

The standard `npm run dev` command serves the Next.js site but does not emulate Netlify Functions. Use Netlify Dev for an end-to-end local test:

```bash
npx netlify dev
```

Create a local `.env` file using `.env.example` as a template. Never commit the real `.env` file.

You can also invoke the function through Netlify CLI:

```bash
npx netlify functions:invoke contact --payload '{"name":"Test User","email":"test@example.com","phone":"0900000000","from":"2026-07-20","to":"2026-07-21","message":"Test request"}'
```

## 5. Troubleshooting

- **E-mailová služba zatiaľ nie je nakonfigurovaná:** one or more environment variables are missing.
- **SMTP2GO rejects the request:** verify the API key permission and the sender address/domain.
- **Function returns 404:** confirm that the production deploy includes `netlify/functions/contact.js` and `netlify.toml`.
- Review the `contact` function logs in the Netlify dashboard for the SMTP2GO request ID and failure details.

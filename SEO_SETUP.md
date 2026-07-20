# Technical SEO setup

The website generates the following automatically:

- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`
- canonical and Slovak-language metadata
- Open Graph and Twitter sharing metadata
- `AutoRental`, `WebSite`, and `WebPage` JSON-LD structured data
- crawler access for standard search bots, `OAI-SearchBot`, and `ChatGPT-User`
- a permanent redirect from the `www` hostname to the canonical apex domain

## Search-engine verification

After the production domain is live:

1. Add `https://pozicajdodavku.sk` to Google Search Console.
2. Add `https://pozicajdodavku.sk` to Bing Webmaster Tools.
3. Add the verification tokens in Netlify:

| Variable | Value |
| --- | --- |
| `GOOGLE_SITE_VERIFICATION` | Google HTML-tag verification token only |
| `BING_SITE_VERIFICATION` | Bing `msvalidate.01` verification token only |

Redeploy the website after adding or changing either variable.

## Production checks

Confirm that all of these URLs return HTTP 200:

- `https://pozicajdodavku.sk/`
- `https://pozicajdodavku.sk/robots.txt`
- `https://pozicajdodavku.sk/sitemap.xml`
- `https://pozicajdodavku.sk/manifest.webmanifest`

Submit the generated sitemap in both Google Search Console and Bing Webmaster Tools.

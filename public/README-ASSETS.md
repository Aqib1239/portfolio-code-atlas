# Static assets — drop your files here

Everything in this `public/` folder is served from the site root (`/`).

## Add your profile photo (required for the hero portrait)

Save your photo here as **`profile.jpg`**:

```
public/profile.jpg
```

- The hero shows an X-ray scanner sweep over this image.
- Recommended: a portrait around **4:5** ratio (e.g. 1000 × 1250 px). The frame is `aspect-[4/5]` and uses `object-cover object-top`, so a vertical portrait crops best.
- The photo you shared sits on a dark background, which is intentional — the card keeps a dark panel in both light and dark themes so the edges blend in.
- Until the file exists, the hero shows a clean **"MA" monogram** fallback automatically (no broken image).

The path is configured in `data/site.ts` as `profilePhoto = "/profile.jpg"`. If you'd rather use a `.png`/`.webp`, change that value to match.

## Add your résumé (optional)

Save your résumé here as **`resume.pdf`**:

```
public/resume.pdf
```

The "Download Résumé" button (`contact.resume` in `data/site.ts`) points at `/resume.pdf`. If you host it elsewhere, change that value to the external URL instead.

---

You can delete this file once your assets are in place.

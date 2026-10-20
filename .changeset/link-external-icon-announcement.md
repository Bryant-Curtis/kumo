---
"@cloudflare/kumo": minor
---

`Link.ExternalIcon` and `LinkButton` with `external` now include localized screen-reader text announcing that the link opens in a new tab. Add `useNewTabAnnouncement()` for composing the same announcement in custom links or a `LinkProvider` component.

This changes the accessible name of links that use `Link.ExternalIcon` or `LinkButton external` (for example, "Docs" becomes "Docs (opens in a new tab)"). Update tests that query these links by exact name.

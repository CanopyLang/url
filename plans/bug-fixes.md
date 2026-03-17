# canopy/url — Protocol Extensions and Bug Fixes

From andre-dietrich/elm-patch.

---

## Non-HTTP Protocol Support (MEDIUM)

- [ ] **Extend Protocol type with additional schemes.** (andre-dietrich/elm-patch)
  Elm only supports `Http | Https`. Canopy should support modern web protocols:
  - `Ws` / `Wss` — WebSocket
  - `Ftp` — File Transfer Protocol
  - `File` — file:// protocol (for PWAs, desktop apps, offline use)
  - Consider: `Ipfs`, `Ipns` — decentralized content (if there's demand)
  - Consider: `Data` — data URIs

## Windows file:// Port Parsing (LOW)

- [ ] **Fix port parsing for `file:///C:/path` on Windows.** (from andre-dietrich)
  A colon after a drive letter (`C:`) is misinterpreted as a port separator. When the port doesn't parse as an integer, return `Just` with `Nothing` port instead of `Nothing` (graceful fallback).

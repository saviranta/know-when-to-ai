# Know When to AI

*A field guide to find nails that can be hammered with AI.*

This repository publishes the book **Know When to AI** as a static site.
The source is public for transparency of the writing and build process.

The book is meant to be **read on its site**, not cloned or re-hosted.

## Read the book

**https://know-when-to-ai.pages.dev**

## License

All content and code in this repository are copyrighted.
See [LICENSE](LICENSE). All rights reserved. No part of this
repository may be reproduced, redistributed, or re-used without
written permission.

## Local build (for the author only)

```bash
pip install -r requirements.txt
mkdocs serve     # http://127.0.0.1:8000
mkdocs build     # writes site/
```

Deployment is automatic: Cloudflare Pages builds `main` on every push.

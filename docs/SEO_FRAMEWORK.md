# SPARKERS GAMES — SEO ARCHITECTURE & COMPLIANCE SPECIFICATION

This master specification enforces the **GLOBAL SEO REQUIREMENTS** across all 18 milestones.

---

## 1. Semantic SEO Framework
- **Topic Clusters**: Every page belongs to a designated silo (e.g., `/couples`, `/play`, `/quizzes`, `/encyclopedia`, `/blog`).
- **Internal Linking**: Minimum 5 contextual internal links per page.
- **Entity IDs**: Unified `@id` URLs for Organization (`https://sparkers.games/#organization`) and WebSite (`https://sparkers.games/#website`).

## 2. On-Page SEO Standard
- Single `<h1>` per view.
- Unique page titles formatted as `<Page Title> | Sparkers Games`.
- OpenGraph & Twitter Card images attached to all metadata configurations.

## 3. Technical SEO Infrastructure
- Next.js 15 App Router Metadata API.
- Automatic XML Sitemap indexing.
- GEO AI reader file (`/public/llms.txt`).
- `robots.txt` routing.

## 4. AEO (Answer Engine Optimization)
- Every informational and game page starts with a concise 2–3 sentence direct answer snippet.
- FAQ schema generation on every content template.

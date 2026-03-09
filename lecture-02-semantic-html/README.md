# Lecture 02 – Semantic HTML & Structure

## 1. What I implemented this lecture
- Organized personal information using a single `<h1>` and a logical header.
- Created a portfolio section with images, captions, and an embedded YouTube video.
- Added a "Skip to content" link and semantic navigation for better accessibility.

## 2. Semantic decisions I made (REQUIRED)

### Decision 1
- **Element(s) used:** `<figure>` and `<figcaption>`
- **Where in the page:** Inside the Portfolio section for project images and the YouTube video.
- **Why this element is semantically correct:** It groups the media content with its description, making it clear to browsers that the text belongs specifically to that image or video.

### Decision 2
- **Element(s) used:** `<nav>`
- **Where in the page:** At the top, containing the links to About, Portfolio, and Interests.
- **Why this element is semantically correct:** It identifies the major navigation block, allowing screen readers to quickly locate site links.

### Decision 3
- **Element(s) used:** `<main>` with `id="main"`
- **Where in the page:** Wrapping the core content between the header and the footer.
- **Why this element is semantically correct:** It marks the unique primary content of the page, which is essential for the "Skip to content" accessibility feature.

---

## 3. Accessibility considerations
- **Skip Link:** I added `<a href="#main">` so keyboard users can skip the navigation and go straight to the content.
- **Alt Text:** Every image includes descriptive alt text to ensure users with visual impairments can understand the visuals.

---

## 4. What I learned
- I learned how to use semantic landmarks like `<header>`, `<main>`, and `<footer>` to create a professional page structure.

## 5. What I still need to improve
- I need to practice more with different media embedding techniques before we move to CSS styling.

## 6. Notes about AI usage (if any)
- **Tool used:** Gemini
- **What I accepted as-is:** The semantic structure and the accessibility link logic.
- **What I modified manually:** All personal content and specific interest lists.
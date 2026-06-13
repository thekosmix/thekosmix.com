# thekosmix.com - Blog Context and Guidelines

This `GEMINI.md` file serves as a comprehensive guide for managing, generating, and optimizing content for this Jekyll-based personal blog. It includes details on the blog's structure, instructions for adding new posts, and best practices for SEO, AEO, and GEO.

## Blog Structure

The blog is built with **Jekyll** and uses a standard directory structure:

- `_config.yml`: Global configuration, including site details, author profiles, and active plugins (e.g., `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed`).
- `_posts/`: Directory containing all blog posts. Files must follow the `YYYY-MM-DD-title-slug.md` naming convention.
- `_pages/`: Directory for standalone pages (e.g., About, Contact).
- `_layouts/` & `_includes/`: HTML templates and reusable components that dictate the site's design.
- `_sass/`: SCSS partials for styling.
- `assets/`: Static assets. Images for posts should typically be stored in `assets/images/`.

## Adding a New Blog Post

To add a new blog post, follow these steps:

1. **Create a new file** in the `_posts/` directory.
2. **Name the file** using the format: `YYYY-MM-DD-your-seo-friendly-title-slug.md` (e.g., `2026-06-14-future-of-ai-agents.md`).
3. **Add the YAML Front Matter** at the very top of the file. Use the following template:

```yaml
---
layout: post
title: "Your Catchy, SEO-Friendly Title Here"
description: "A concise, 150-160 character summary of the post for search engine snippets and social sharing."
author: sid
categories: [ Tech, Personal, etc. ]
image: assets/images/your-relevant-image.png
---
```
*Note: The author `sid` is predefined in `_config.yml`.*

4. **Write the content** using standard Markdown (GFM is enabled via kramdown).

## Optimization Guidelines (SEO, AEO, GEO)

To maximize the reach and visibility of the content across traditional search engines and emerging AI/Generative engines, adhere to the following practices:

### 1. SEO (Search Engine Optimization)
Optimizing for traditional search engines (Google, Bing).

- **Front Matter**: Always include a descriptive `title`, a concise `description` (under 160 characters), and an `image`. The `jekyll-seo-tag` plugin will use these to generate meta tags automatically.
- **URL Slugs**: Keep file names short, descriptive, and keyword-rich without stop words (e.g., `optimizing-jekyll-seo.md` instead of `how-to-optimize-jekyll-for-seo.md`).
- **Headings (H1-H6)**: Use proper heading hierarchy. The title acts as H1. Use `##` (H2) for main sections and `###` (H3) for subsections. Do not skip heading levels.
- **Internal/External Links**: Use relative links for internal content (`[Link](/slug/)`) and ensure external links open properly and add value. Use descriptive anchor text.
- **Image Alt Text**: Always provide meaningful alt text for images `![Descriptive text](assets/images/img.png)`.

### 2. AEO (Answer Engine Optimization)
Optimizing for conversational AI and voice assistants (Siri, Alexa, Google Assistant).

- **Question-Based Headings**: Phrase H2 or H3 headings as questions users might ask (e.g., "What is Generative Engine Optimization?").
- **Direct Answers**: Immediately follow a question heading with a concise, direct answer in a single paragraph (under 50 words) before expanding on the topic.
- **Structured Data**: Use bulleted lists, numbered lists, and Markdown tables. Answer engines easily parse and present structured data as direct answers.
- **TL;DR / Summary**: Consider adding a quick summary or "Key Takeaways" section at the beginning or end of long posts.

### 3. GEO (Generative Engine Optimization)
Optimizing for LLM-based search and generative engines (ChatGPT Search, Perplexity, Gemini).

- **High Information Density**: Generative engines prioritize content with rich, factual, and unique information. Avoid fluff; get straight to the point.
- **Unique Perspectives & First-Hand Experience**: LLMs summarize general knowledge well. To be cited, provide unique insights, personal anecdotes, specific case studies, or original research that cannot be found elsewhere.
- **Citations and Statistics**: Include relevant statistics, quotes from authoritative sources, and link out to high-quality references. Generative engines look for verifiable facts to ground their responses.
- **Clear Tone and Formatting**: Maintain an authoritative, objective tone. Use bolding to highlight key terms and concepts, making it easier for AI parsers to extract semantic meaning.

## Content Formatting Checklist

- [ ] File named correctly (`YYYY-MM-DD-slug.md`)
- [ ] Complete YAML front matter (layout, title, description, author, categories, image)
- [ ] Proper Markdown heading hierarchy (H2, H3)
- [ ] Direct answers provided for question-based headings
- [ ] Unique insights or personal experiences included
- [ ] Alt text added for all images

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GeoSprint is a static landing page for an AI visibility tracking product. It's a waitlist-first site targeting professionals (lawyers, doctors, financial advisors), founders, and personal brand builders who want to track how AI models (ChatGPT, Claude, Gemini, Perplexity) cite and represent them.

## Architecture

This is a zero-build static site — no bundler, no framework, no package manager:

- **index.html** — Single-page layout: nav, hero with mock AI Visibility Score widget, problem/solution sections, trust differentiators, ICP targeting, FAQ accordion, waitlist form, footer
- **styles.css** — All styling via CSS custom properties (`:root` vars), responsive grid layouts, dark theme with cyan accent (`#45d0ff`)
- **script.js** — Minimal JS: FAQ accordion toggle only

## Development

Open `index.html` directly in a browser or use any static file server (e.g., `python3 -m http.server`). No build step, no dependencies, no tests.

## Key Details

- **Waitlist form** submits to Formspree (`https://formspree.io/f/mlgwvyer`) via POST
- **Design system**: dark background (`--bg: #0b0f14`), cyan accent (`--accent: #45d0ff`), Inter font stack
- **Responsive breakpoints**: 980px (single-column grid, nav links hidden) and 640px (smaller padding/font adjustments)
- **Font**: Inter via system font stack (no external font loaded)

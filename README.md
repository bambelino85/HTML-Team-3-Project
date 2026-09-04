# Panther Survey — PVAMU Student Registration Survey

A student registration and orientation survey built for the Prairie View A&M University Department of Engineering, originally created as a team project.

## Overview

The survey collects basic student information (name, ID, contact details, expected graduation year) alongside a short set of questions about major, orientation attendance, commute, housing, and campus involvement.

## Tech stack

- HTML5 (semantic form structure, native validation)
- CSS3 (custom properties, flexbox/grid, no framework)
- Vanilla JavaScript (progressive enhancement for validation feedback)

## Project structure

```
.
├── index.html      # Survey page
├── style.css       # Styling (PVAMU purple & gold theme)
├── script.js       # Client-side validation feedback
├── submit.html     # Post-submission confirmation page
└── netlify.toml    # Netlify publish config
```

## Running locally

No build step required. Clone the repo and open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Collecting responses

Form submissions are handled by [Netlify Forms](https://docs.netlify.com/manage/forms/setup/). Deploy this repo to Netlify (connect the GitHub repo, or drag-and-drop the folder in the Netlify dashboard) and submissions will show up under **Site → Forms** with no backend code required. The form includes a honeypot field (`bot-field`) for basic spam filtering.

## Notes

This project was originally built as a team assignment and has since been refactored for cleaner semantic markup, accessibility (labeled fieldsets, visible focus states, reduced-motion support), and a proper external stylesheet.

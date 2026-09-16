# Interactive CV — Mercedes Antón

Responsive interactive CV and portfolio developed to showcase my experience, education, skills, UX/UI projects, and front-end development work.

The project combines **HTML5, CSS3, and JavaScript** to create a dynamic, responsive, and user-focused experience.

## About the project

This interactive CV was created as a personal front-end project to present my professional profile in a more engaging way than a traditional static CV.

The interface combines front-end development principles with UX/UI design, focusing on **responsive design, accessibility, usability, and clear content organization**.

The CV content is managed through JavaScript objects and dynamically rendered into the interface.

## Features

* Responsive layout for desktop, tablet, and mobile devices.
* Dynamic CV content generated with JavaScript.
* Dark mode / light mode with preference persistence using `localStorage`.
* Responsive navigation with animated hamburger menu.
* Interactive experience sections with expandable content.
* Hard skills and soft skills displayed dynamically.
* Interactive project carousels for UX and Web projects.
* Smooth scrolling navigation.
* Responsive typography using CSS `clamp()`.
* Accessible focus states and descriptive labels.
* External links to projects, LinkedIn, GitHub, and portfolio.
* Semantic HTML structure and basic SEO metadata.

## Technologies

* **HTML5** — semantic structure and accessibility.
* **CSS3** — responsive layout, custom properties, Flexbox, Grid, animations, and media queries.
* **JavaScript** — dynamic content rendering, DOM manipulation, event handling, arrays of objects, template literals, and `localStorage`.
* **Bootstrap Icons** — interface icons.
* **Google Fonts** — Darker Grotesque and Island Moments.

## JavaScript

The CV information is organized in a JavaScript array of objects, separating the main sections of the CV:

* About Me
* Education
* Experience
* Skills
* Projects
* Contact

The interface is then generated dynamically from this data.

This approach allows the content to be managed from a centralized data structure instead of hard-coding the same information directly into the HTML.

## UX/UI approach

The design was created with a focus on:

* Clear visual hierarchy.
* User-centered content organization.
* Responsive layouts across different screen sizes.
* Consistent visual components.
* Accessible interaction states.
* Simple navigation between sections.
* Separation of UX projects and Web development projects.

The visual identity uses a light and purple-based color palette with a dark mode alternative.

## Responsive design

The layout adapts to different screen sizes using CSS media queries, flexible units, and `clamp()` for responsive typography and spacing.

On smaller screens, the main navigation changes to an animated hamburger menu and the content is reorganized into a single-column layout.

## Project structure

* `index.html` — main HTML structure.
* `styles.css` — visual design and responsive styles.
* `scripts.js` — dynamic content and interactive functionality.
* `img/` — images, icons, and visual assets.

## Projects included

### UX/UI

* **PunkMe** — Mobile application concept for punk music content, news, and music sales.
* **Kinétrolis** — Cinema ticket booking and seat selection platform.
* **Rescat3** — Public-interest project promoting the 3Rs: reduce, reuse, and recycle.

### Web Development

* **Meulada** — Pet adoption website.
* **Sora** — Responsive jewellery website.
* **Muhiwara** — Interactive web form.
* **StargateTour** — JavaScript-based intergalactic travel website.

## Author

**Mercedes Antón**

Front-end Web Developer | UX Designer

* GitHub: `ma-27-ma`
* LinkedIn: `ma27anton`

## Purpose

This project is part of my web development and UX/UI portfolio and reflects my ongoing learning and development as a junior front-end developer.

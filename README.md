# [Personal Portfolio Website](https://github.com/gaureshpai/hseruag)

## Project Description

Welcome to my personal portfolio website! This application is built with Next.js to showcase my projects, skills, and experiences as a developer. It provides a responsive and visually appealing platform designed to highlight my work and professional journey.

## Features

-   **Responsive Design:** Optimized for various screen sizes, ensuring a seamless experience on desktops, tablets, and mobile devices.
-   **Project Showcase:** Dedicated sections to display projects with descriptions and relevant details.
-   **Skills & Experience:** Detailed overview of technical skills and professional experiences.
-   **SEO Optimized:** Enhanced with `next-seo` for better search engine visibility.
-   **Interactive UI:** Utilizes Framer Motion for smooth animations and transitions.
-   **Theme Switching:** Supports light and dark modes with `next-themes`.
-   **Contact Form:** Functionality to allow visitors to reach out via email.
-   **GitHub Integration:** Potentially fetches projects or data from GitHub using `@octokit/rest`.

## Tech Stack

This project is built with a modern and robust set of technologies:

- **Frontend Framework:**
  - [Next.js](https://nextjs.org/) (v16) - React framework for server-side rendering, static site generation, and API routes.
  - [React](https://reactjs.org/) (v18) - A JavaScript library for building user interfaces.
- **Styling:**
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
  - [Headless UI](https://headlessui.dev/) - Unstyled, fully accessible UI components.
- **Animation:**
  - [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
- **Forms & Validation:**
  - [Formik](https://formik.org/) - Build forms in React, without the tears.
  - [Yup](https://github.com/jquense/yup) - JavaScript schema builder for value parsing and validation.
- **SEO:**
  - [Next SEO](https://github.com/garmeeh/next-seo) - Easily configure your Next.js SEO.
- **Theming:**
  - [Next Themes](https://github.com/pacocoursey/next-themes) - An elegant, cross-browser, next-generation dark mode theme solution for Next.js.
- **Email:**
  - [Nodemailer](https://nodemailer.com/) - Module for Node.js applications to allow easy email sending.
- **GitHub API:**
  - [`@octokit/rest`](https://github.com/octokit/rest.js/) - GitHub REST API client for JavaScript.
- **Icons:**
  - [Lucide React](https://lucide.dev/) - A collection of beautiful open-source icons.
  - [React Icons](https://react-icons.github.io/react-icons/) - Popular icon sets as React components.

## Scripts Overview

-   `dev`: Starts the Next.js development server.
-   `build`: Builds the Next.js application for production.
-   `start`: Starts the Next.js production server.
-   `lint`: Lints the project code.
-   `format:check`: Checks code formatting with Prettier.
-   `format:fix`: Fixes code formatting with Prettier.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/gaureshpai/hseruag.git
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```
3.  Set up your environment variables:
    Create a `.env` file in the root directory (if not already present) and populate it with any necessary API keys or configurations (e.g., for Nodemailer or GitHub API). Refer to `.env.example` for guidance.

### Running the Application

-   To run the development server:
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.
# Lab Website – React + TypeScript + Vite

This project is a React-based frontend application built with TypeScript and Vite. It is designed to support dynamic content updates without requiring code changes, with much of the content (text and images) being loaded from external URLs managed via the lab's WordPress backend.

> ⚠️ **Note:** Due to cross-origin protections, some images or text may not load properly unless the app is served from the lab’s official domain. This is expected behavior during local development.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
### 2. Install Dependencies
Make sure you have Node.js installed. Then run:
```bash
npm install
```
## Development

To start a local development server with hot module replacement:
```bash
npm run dev
```
Then enter the link provided to you on the terminal.
> ⚠️ **Note:** Some images and text may not load correctly during local development due to CORS or domain-based content restrictions from the lab’s WordPress instance.

## Building for Production

To generate an optimized build:
```bash
npm run build
```
This should createa a "dist" folder within your project directory. From there, navigate to the "wp-content/reactpress/apps/gomperts-website" folder on the lab wordpress site and replace the current "dist" folder with the new one. Refresh the page and you should see the changes that reflect the new codebase shortly. 

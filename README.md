# ARCH STAR

A modern website built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

The dependencies are already installed. If you need to reinstall them:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build the project for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
arch-star/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── App.tsx      # Main App component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles with Tailwind
├── index.html       # HTML template
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## Development Guidelines

- Use Tailwind CSS utility classes for styling
- Follow TypeScript best practices
- Keep components modular and reusable
- Use ESLint for code quality

## License

Private project

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
# ArchStar

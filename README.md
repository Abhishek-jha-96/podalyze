# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

--- 
## Repo structure:
src/
  app/                <-- Application-specific code (routes, layouts, views)
    routes/
      dashboard/
        DashboardPage.tsx
        DashboardLayout.tsx
        dashboardLoader.ts
        dashboardActions.ts
      settings/
        SettingsPage.tsx
    components/        <-- UI components tied to app (may use shared ones too)
    layouts/           <-- App-level layouts
    utils/             <-- Only app-specific utils
    hooks/             <-- Only app-specific hooks
    constants/         <-- App-specific constants
    stores/            <-- App-specific state management (e.g., Zustand, Jotai)
    services/          <-- App-specific API services
    index.tsx          <-- App entrypoint
  libs/                <-- Fully reusable libraries (can be used across apps)
    hooks/
      useDebounce.ts
      useLocalStorage.ts
    utils/
      formatDate.ts
      generateUUID.ts
    components/        <-- Reusable design system components (Button, Input, etc.)
      Button.tsx
      Input.tsx
    api/               <-- API clients, SDKs
      axiosInstance.ts
  assets/              <-- Images, fonts, static assets
  config/              <-- App configuration (env vars, routes config, etc.)
  styles/              <-- Global styles (CSS/SCSS/Tailwind config)
  types/               <-- Global TypeScript types/interfaces
  lib/                 <-- (optional) helper code that is a bit too heavy for libs/, like 3rd-party integrations
  tests/               <-- (optional) unit/integration tests if you separate them

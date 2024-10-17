## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

## Lint

Lint project:

```bash
# npm
npm run lint

# pnpm
pnpm run lint

# yarn
yarn lint

# bun
bun run lint
```

## Prettier

Format code into project:

```bash
# npm
npm run format

# pnpm
pnpm run format

# yarn
yarn format

# bun
bun run format
```

## Project architecture
1. Frontend (Vue 3):
    - Components: Vue components for UI, forms, inputs, etc. (`/components`)
    - Pages: Separate views (e.g., Home, Search). (`/pages`)
    - Global styles with scss and any media for client (`/assets`) 
    - Store: State management using Pinia. (`/store`)
2. Server-Side Rendering (SSR):
    - Entry Points: Client (`entry-client.ts`) and server (`entry-server.ts`) entry files for hydration and SSR.
    - Vite Config: Configuration for both client-side and SSR builds.
    - Backend: Express server (`server.ts`) to handle SSR, routing, and API proxying.

3. Utilities:
    - Help functions (`/utils`)
    - Data fetching (`/services`) 

4. Build & Configuration:
    - Vite setup for both client and server builds.
    - Scripts for development and production builds in package.json.

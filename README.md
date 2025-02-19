# Next.js OAuth with Google

A modern Next.js 14 application demonstrating secure Google OAuth authentication with TypeScript. Features protected routes, server-side session management, and a clean dashboard interface.

## Key Features

-   🔐 Google OAuth2 Authentication
-   🍪 Secure cookie-based sessions
-   🛡️ Protected routes with middleware
-   📱 Responsive dashboard
-   🔄 Type-safe with TypeScript
-   ⚡ Built with Next.js 14 App Router

## Tech Stack

-   Next.js 14
-   TypeScript
-   Google OAuth2
-   Tailwind CSS

## Getting Started

```bash
git clone <repository-url>
cd next-oauth-google
npm install
```

Configure your `.env` file:

```env
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
REDIRECT_URI=http://localhost:3000/api/oauth
HOMEPAGE=http://localhost:3000
```

Run the development server:

```bash
npm run dev
```

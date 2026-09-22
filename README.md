# just an IELTS

A focused IELTS preparation workspace built with Next.js. It includes a redesigned landing page, a responsive study dashboard, targeted practice and vocabulary views, and Google-only authentication.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Google sign-in configuration

The login flow uses Google OAuth 2.0 on the server, exchanges the authorization code securely, retrieves the verified Google profile, and creates a signed, HTTP-only session cookie.

1. Create an OAuth **Web application** client in Google Cloud Console.
2. Add `http://localhost:3000/api/auth/google/callback` to its authorized redirect URIs for local development. Add the equivalent production URL when deploying.
3. Create `.env.local` from the following values:

```bash
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
# Generate a long, unique random value. Do not commit it.
AUTH_SECRET=your-long-random-session-secret
```

Without these variables, the UI remains usable, while Google sign-in displays a clear configuration message rather than attempting an insecure client-side login.

## Quality checks

```bash
npm run lint
npm run build
```

# EthicaWorkforce - Next.js Authentication System

A modern authentication system built with Next.js 14, Supabase, and TypeScript for connecting nurses with healthcare opportunities worldwide.

## Features

- ✅ **Authentication System**
  - Login with email/password
  - User registration with role selection (Nurse, Hospital, Agents)
  - Password reset functionality
  - Demo accounts for testing
  - Automatic session management
  - Secure route protection

- ✅ **Database Integration**
  - Supabase backend with PostgreSQL
  - User profiles with role-based access
  - Hospital and nurse management
  - Document and task tracking

- ✅ **Modern UI/UX**
  - Responsive design with Tailwind CSS
  - shadcn/ui component library
  - Form validation with zod
  - Loading states and error handling

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   - Copy `.env.example` to `.env.local`
   - Add your Supabase project URL and anon key

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Visit the app:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - You'll be redirected to the login page

## Testing Authentication

### Demo Accounts
The app includes demo login buttons for testing:
- **Demo Nurse**: `nurse@demo.com` / `demo123`
- **Demo Hospital**: `hospital@demo.com` / `demo123`
- **Demo Admin**: `admin@demo.com` / `demo123`

### User Registration
1. Go to `/signup`
2. Fill in your details
3. Select your role (Nurse, Hospital, Agent)
4. Complete registration
5. Check email for confirmation (if using real Supabase setup)

### Dashboard Access
After login, users are redirected to `/dashboard` with role-specific content:
- **Nurses**: Profile setup, applications, learning modules
- **Hospitals**: Job posting, candidate management, team settings
- **Admins**: User management, analytics, system settings

## Architecture

```
src/
├── app/
│   ├── login/page.tsx           # Login page
│   ├── signup/page.tsx          # Registration page
│   ├── reset-password/page.tsx  # Password reset
│   ├── auth/callback/page.tsx   # Auth callback handler
│   ├── dashboard/page.tsx       # Main dashboard
│   └── page.tsx                 # Home page (redirects to auth)
├── components/ui/               # Reusable UI components
├── lib/
│   ├── supabase/
│   │   ├── client.ts           # Browser client
│   │   ├── server.ts           # Server client
│   │   ├── middleware.ts       # Auth middleware
│   │   └── types.ts            # Database types
│   └── utils.ts                # Utility functions
└── middleware.ts               # Route protection
```

## Database Schema

The application uses the following main tables:
- `profiles`: User profiles with roles
- `nurses`: Nurse-specific data
- `hospitals`: Hospital information
- `positions`: Job postings
- `tasks`: User tasks
- `documents`: File management

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Built With

- **Framework**: Next.js 14 with App Router
- **Authentication**: Supabase Auth with SSR
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **TypeScript**: Full type safety

## Security Features

- Route protection with middleware
- Session management with automatic refresh
- Form validation and sanitization
- CSRF protection (built into Next.js)
- Environment variable validation

## Deployment

The app is ready for deployment on Vercel or any platform supporting Next.js:

```bash
npm run build
npm start
```

Make sure to set environment variables in your deployment platform.

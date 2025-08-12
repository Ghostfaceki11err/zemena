# Environment Variables Setup

## Create .env.local file

Create a `.env.local` file in your project root (same level as package.json) with the following content:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## How to get these values:

1. Go to your Supabase project dashboard
2. Navigate to **Settings** → **API**
3. Copy the **Project URL** and paste it as `NEXT_PUBLIC_SUPABASE_URL`
4. Copy the **anon/public key** and paste it as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Example:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Important Notes:

- The `NEXT_PUBLIC_` prefix makes these variables available in the browser
- Never commit `.env.local` to version control
- Restart your development server after adding these variables
- These are safe to expose in client-side code (they're designed for this purpose)

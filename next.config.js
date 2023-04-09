/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HASH: 'kishcodes ;)',
    SUPABASE_URL: 'https://yccpiotmsauajemqlnjd.supabase.co',
    SUPABASE_ANON: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljY3Bpb3Rtc2F1YWplbXFsbmpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NjY1MTYsImV4cCI6MTk5NjI0MjUxNn0.6RY3yZLUEn_83_cC0voqGP9NlnyTcEwBomIFFO7h0Oo'
  }
}

module.exports = nextConfig

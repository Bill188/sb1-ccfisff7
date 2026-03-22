module.exports = {
  apps: [{
    name: 'mastercraft',
    script: 'npm',
    args: 'run preview',
    env: {
      NODE_ENV: 'production',
      VITE_SUPABASE_URL: 'your-supabase-url',
      VITE_SUPABASE_ANON_KEY: 'your-supabase-anon-key'
    }
  }]
}
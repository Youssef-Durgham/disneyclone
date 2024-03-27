module.exports = {
    images: {
      domains: ['platform-lookaside.fbsbx.com', 'image.tmdb.org', 'github.com'],
    },
    experimental: { images: { allowFutureImage: true } },
    env: {
    NEXT_PUBLIC_AUTH0_CLIENT_ID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
    NEXT_PUBLIC_AUTH0_CLIENT_SECRET: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
    NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL,
    NEXT_PUBLIC_FACEBOOK_CLIENT_ID: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
    NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    NEXT_PUBLIC_GOOGLE_SECRET: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
    NEXT_PUBLIC_MONGODB_URI: process.env.NEXT_PUBLIC_MONGODB_URI,
    NEXT_PUBLIC_NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_NEXT_PUBLIC_SECRET,
    NEXT_PUBLIC_TMDB_API: process.env.NEXT_PUBLIC_TMDB_API,
    NEXT_PUBLIC_GOOGLE_CALLBACK_URL: process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL,
    NEXT_PUBLIC_AUTH0_CALLBACK_URL: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL,
    NEXT_PUBLIC_FACEBOOK_CALLBACK_URL: process.env.NEXT_PUBLIC_FACEBOOK_CALLBACK_URL,
    NEXT_PUBLIC_NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
  },
  }

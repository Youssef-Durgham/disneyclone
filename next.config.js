module.exports = {
    images: {
      domains: ['platform-lookaside.fbsbx.com', 'image.tmdb.org', 'github.com'],
    },
    experimental: { images: { allowFutureImage: true } },
    env: {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    MONGODB_URI: process.env.MONGODB_URI,
    NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
    TMDB_API: process.env.TMDB_API,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
    AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL,
    FACEBOOK_CALLBACK_URL: process.env.FACEBOOK_CALLBACK_URL,
  },
  }

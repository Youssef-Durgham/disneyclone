
import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb.js"
import GoogleProvider from "next-auth/providers/google"
import Auth0Provider from "next-auth/providers/auth0";
import FacebookProvider from "next-auth/providers/facebook";
import EmailProvider from 'next-auth/providers/email'
// import { FirestoreAdapter } from "@next-auth/firebase-adapter";
// import { firebaseConfig  } from "../../../firebase";
import { MongoClient } from "mongodb"

// firebase config for next-auth sign in & sign out system //

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//       Auth0Provider({
//         clientId: process.env.AUTH0_CLIENT_ID,
//         clientSecret: process.env.AUTH0_CLIENT_SECRET,
//         issuer: process.env.AUTH0_ISSUER_BASE_URL
//       }),
//       FacebookProvider({
//         clientId: process.env.FACEBOOK_CLIENT_ID,
//         clientSecret: process.env.FACEBOOK_CLIENT_SECRET
//       }),
//     //   EmailProvider({
//     //     server: process.env.EMAIL_SERVER,
//     //     from: process.env.EMAIL_FROM,
//     //     // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
//     //   }),
//     // ...add more providers here
//   ],
//   secret: process.env.NEXT_PUBLIC_SECRET,
//   adapter: FirestoreAdapter(firebaseConfig),
//   theme: "dark",
// //   callbacks: {
// //     async session({ session, token, user }){
// //       session.user.username = session.user.name.split(' ').join('').toLocaleLowerCase();

// //     session.user.uid = token.sub;
// //     return(session, token, user) ;
// //     }
// //   }
// });


// mongodb config for next-auth sign in & sign out system //




// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
NEXTAUTH_URL:"https://disney.codeklab.com",
  adapter: MongoDBAdapter(clientPromise),
    providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
      callbackUrl: `https://disney.codeklab.com/api/auth/callback/google`,
    }),
      Auth0Provider({
        clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
        issuer: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL,
        callbackUrl: `https://disney.codeklab.com/api/auth/callback/google`,
      }),
      FacebookProvider({
        clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
        callbackUrl: `https://disney.codeklab.com/api/auth/callback/google`,
      }),
    ],
    secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
})

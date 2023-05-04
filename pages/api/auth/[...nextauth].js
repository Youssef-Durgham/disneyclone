
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
  adapter: MongoDBAdapter(clientPromise),
    providers: [
    GoogleProvider({
      clientId: "236962782905-169rsqkhkh0ti6mprpuju4auum7cui1b.apps.googleusercontent.com",
      clientSecret: "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",
    }),
      Auth0Provider({
        clientId: 'aTEYpg9Z7Wa6CFasr9yuhBIxK8p15yde',
        clientSecret: 'N0f6zRJZ1ER_Pkg4CBPc1NPxsmRafkGxkrHHukiCpf4hbPkwAdJTS_bUiPrERbHH',
        issuer: 'https://dev-9hx9puyp.us.auth0.com'
      }),
      FacebookProvider({
        clientId: '2191402641034976',
        clientSecret: '58175b3b1cba8a1e8ccd4a82338f2c09'
      }),
    ],
    secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
})

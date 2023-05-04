import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider
      session={pageProps.session}
      options={{
        site: "https://main.d2gayeidqn12dv.amplifyapp.com",
      }}
    >
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

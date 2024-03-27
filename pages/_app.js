import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider
      session={pageProps.session}
      options={{
        site: "https://disney.codeklab.com",
      }}
    >
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

import "@/styles/globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteWideBanner from "@/components/SiteWideBanner"

import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/store/store";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App Component={Component} pageProps={pageProps} />
      </PersistGate>
    </ReduxProvider>
  );
}

function App({ Component, pageProps }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn && pageProps.requiresAuth) {
      router.push("/login");
    }
  }, [isLoggedIn, pageProps.requiresAuth, router]);

  return (
    <div className="app-wrapper">
      <Head>
        <title>Kratom In це магазин колекційного чаю з Південно-Східної Азії по найкращим цінами</title>
        <meta name="description" content="Якісний та перевірений кратом зелених та білих сортів не по завищених цінах." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="кратом, kratom, green maeng, white maeng, зелений кратом, заменитель кратома, замінник кратома, матча" />
        <link rel="icon" href="/favicon.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script async src="/clickChat.js"></script>
        <script async src="https://www.w3counter.com/tracker.js?id=152206"></script>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SiteWideBanner />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  const requiresAuth = Component.requiresAuth || false;

  return { pageProps: { ...pageProps, requiresAuth } };
};

export default MyApp;

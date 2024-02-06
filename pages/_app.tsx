// `pages/_app.js`
import { ReactElement, ReactNode } from "react";
import "../styles/global.css";
import RootLayout from "../app/layout";

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

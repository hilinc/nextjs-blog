// `pages/_app.js`
import { ReactElement, ReactNode } from "react";
import "../styles/global.css";

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />;
}

import "../styles/globals.scss";
import "antd/dist/antd.min.css";
import { IconBrandChrome } from "@tabler/icons-react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

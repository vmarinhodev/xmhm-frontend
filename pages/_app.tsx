import "@/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";


axios.defaults.baseURL = process.env.PAYLOAD_SERVER_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

export default function App({ Component, pageProps }: AppProps) {

  console.log('pageProps', pageProps)
  return <Component {...pageProps} />;
}

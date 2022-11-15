import "../styles/global.scss";
import { Layout } from "../components/Layout";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#ffa500" height={5} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

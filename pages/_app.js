import "../styles/globals.css";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../src/aws-exports";
Auth.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
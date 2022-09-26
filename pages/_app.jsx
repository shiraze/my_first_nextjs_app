// this is not referenced but _is_ used implictly
import styles from "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

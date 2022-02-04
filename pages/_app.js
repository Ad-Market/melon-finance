import { useEffect } from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css")
      : null;
    typeof document !== undefined
      ? require("../node_modules/bootstrap/dist/css/bootstrap-grid.min.css")
      : null;
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;

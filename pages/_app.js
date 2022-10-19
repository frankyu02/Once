import GlobgalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobgalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

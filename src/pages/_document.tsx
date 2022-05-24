import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="preconnect" href={process.env.NEXT_PUBLIC_API_URL} /> */}
        </Head>
        <body className="loading">
          <div className="main">
            <Main />
          </div>
          <NextScript />
          <div id="__debug" style={{ position: "fixed", bottom: 0, left: 0, zIndex: 99999, width: "100%" }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

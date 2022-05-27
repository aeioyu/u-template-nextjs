import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="noindex" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#04D8BB" />
          <link rel="preload" as="image" href="/preloadurl" />
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

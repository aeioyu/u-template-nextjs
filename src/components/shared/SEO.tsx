import React from "react";
import Head from "next/head";

const SEO = () => {
  return (
    <Head>
      <title>Virtual Store | เปิดประสบการณ์ช๊อปปิ้งแบบใหม่</title>
      <meta name="title" content="Virtual Store | เปิดประสบการณ์ช๊อปปิ้งแบบใหม่" />
      <meta name="description" content="เปิดประสบการณ์ช๊อปปิ้งแบบใหม่บน Virtual Store ลองสินค้าแบบ virtual try-on" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://freakstore.xyz/" />
      <meta property="og:title" content="Virtual Store | เปิดประสบการณ์ช๊อปปิ้งแบบใหม่" />
      <meta
        property="og:description"
        content="เปิดประสบการณ์ช๊อปปิ้งแบบใหม่บน Virtual Store ลองสินค้าแบบ virtual try-on"
      />
      <meta property="og:image" content="https://freakstore.xyz/images/og_image.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://freakstore.xyz/" />
      <meta property="twitter:title" content="Virtual Store | เปิดประสบการณ์ช๊อปปิ้งแบบใหม่" />
      <meta
        property="twitter:description"
        content="เปิดประสบการณ์ช๊อปปิ้งแบบใหม่บน Virtual Store ลองสินค้าแบบ virtual try-on"
      />
      <meta property="twitter:image" content="https://freakstore.xyz/images/og_image.png" />
    </Head>
  );
};

export default SEO;

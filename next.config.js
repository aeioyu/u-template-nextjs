/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.(mp3|wav)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    );
    return config;
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://destination/:path*",
  //     },
  //   ];
  // },
};

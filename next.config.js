/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/findHouseReal",
  output: "export",
  trailingSlash: true,
  "serve": "sirv out --port 8080 --cors"
};

module.exports = nextConfig;

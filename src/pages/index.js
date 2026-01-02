import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.webp"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo
    title="Home Page"
    description="Home page of my first Gatsby site"
    pathname="/"
  />
);


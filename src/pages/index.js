import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Home Page" description="Home page of my First Gatsby site" pathname="/" />
);

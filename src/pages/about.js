import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About This Page">
      <p>This is the about page of my Gatsby Site, accessible at /about. Cool!</p>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <SEO title="About This Page" description="About page of my First Gatsby site" pathname="/about" />
);

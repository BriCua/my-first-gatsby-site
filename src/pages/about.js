import * as React from "react";
import { Link } from "gatsby";
import { SEO } from "../components/seo";

const AboutPage = () => {
  return (
    <main>
      <h1>About This Page</h1>
      <p>This is the about page of my Gatsby Site, accessible at /about. Cool!</p>
      <Link to="/">Back To Home</Link>.
    </main>
  );
};

export default AboutPage;

export const Head = () => (
  <SEO title="About This Page" description="About page of my First Gatsby site" pathname="/about" />
);

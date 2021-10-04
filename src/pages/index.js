import React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <Breadcrumb crumbs={crumbs} crumbSeparator=" - " crumbLabel="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

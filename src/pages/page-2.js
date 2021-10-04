import React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
    <SEO title="Page two" />
    <Breadcrumb crumbs={crumbs} crumbSeparator=" - " crumbLabel="Page 2" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

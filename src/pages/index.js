import * as React from "react"
import { useState, useEffect } from "react"

// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import PreLoader from "../components/PreLoader"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <Layout>
          <Seo title="Magdalena Aliaga" />
          <Hero />
        </Layout>
      )}
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Magdalena Aliaga" />

// export default Home

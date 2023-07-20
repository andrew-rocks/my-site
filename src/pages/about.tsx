// Step 1: Import React
import * as React from 'react'
import { HeadFC, PageProps, Link } from "gatsby"
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>About Page</title>

// Step 3: Export your component
export default AboutPage
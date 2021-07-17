import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
//components used
import Layout from "components/Layout/Layout.js";
import Parallax from "components/Parallax/Parallax.js";
import Head from "next/head";
import ReactMarkdown from "react-markdown"
import style from "components/Markdown/markdown.module.css"

const useStyles = makeStyles(styles);

export default function Slug({ allLocations, allServices, aboutPages, allAboutPages }) {
  const classes = useStyles();
  return (
    <Layout studioLocations={allLocations} services={allServices} aboutPages={aboutPages}>
      <Head>
        <title>Hapkido College of Australia | {allAboutPages.fields.title}</title>
      </Head>
      <Parallax image={allAboutPages.fields.bannerImage.fields.file.url} responsive={true}>
        <div className={classes.parallaxContainer}>
              <div className={classes.brand}>
                <h1 className={classes.title}>{allAboutPages.fields.title}</h1>
                <h3 className={classes.subtitle}>{allAboutPages.fields.subtitle}</h3>
              </div>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.indexRaised)}>
      <div className={classes.container}>
        <div className={classes.jumboHeadingContainer}>
          <h1 className={classes.jumboHeading}>{allAboutPages.fields.title}</h1>
        </div>
          <ReactMarkdown className={style.reactMarkDown}>{allAboutPages.fields.pageContent}</ReactMarkdown>
          </div>
          </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // Fetch all results where `fields.slug` is equal to the `slug` param
  const result = await client
    .getEntries({
      content_type: "aboutPages",
      "fields.slug": context.params.slug,
    })
    .then((response) => response.items)

  //Gets studio location ans sercives data for Layout.js
  const allLocations = await client
    .getEntries({ content_type: "studioLocations" })
    .then((response) => response.items)

  const allServices = await client
    .getEntries({ content_type: "services" })
    .then((response) => response.items)

  const aboutPages = await client
    .getEntries({ content_type: "aboutPages" })
    .then((response) => response.items)

  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const allAboutPages = result.pop()

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!allAboutPages) {
    return { props: {} }
  }

  // Return the post as props
  return {
    props: {
      allAboutPages,
      allLocations,
      allServices,
      aboutPages
    },
  }
}

export async function getStaticPaths() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // Query Contentful for all blog posts in the space
  const allAboutPages = await client
    .getEntries({ content_type: "aboutPages" })
    .then((response) => response.items)

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = allAboutPages.map(({ fields: { slug } }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
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
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Contact from "components/Contact/Contact.js";
import Head from "next/head"

const useStyles = makeStyles(styles);

const contactUs = ({ posts, studioLocations, services, aboutPages }) => {
  const classes = useStyles();
  return (
    <Layout studioLocations={studioLocations} services={services} aboutPages={aboutPages}>
      <Head>
        <title>Contact Us | Hapkido College of Australia</title>
      </Head>
      <Parallax image="/img/hca-eagles-banner.jpeg" alt="Hapkido College - Contact" responsive={true}>
        <div className={classes.parallaxContainer}>
          <div className={classes.brand}>
            <h1 className={classes.title}>Contact</h1>
          </div>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.indexRaised)}>
        <div className={classes.infoDivRow}>
          <div className={classes.infoContent}>
            <Contact />
            </div>
            <div className={classes.infoContent}>
            <div style={{ textAlign: "center" }}>
              <h2 >Contact Us</h2>
              <h3>Our Headquarters</h3>
              <h4>146 Parramatta Rd, Croydon NSW 2132</h4>
              <h3>Phone Contact</h3>
              <h4>97-470-822</h4>
              <img style={{ width: "45%" }} src="/img/hca-logo.png" />
            </div>
            <h5>Other Locations</h5>
            <div>
              <ul>
                <li>
                  <Link href="/locations/ermington-west" className={classes.contactLink}>Ermington West</Link>
                </li>
                <li>
                  <Link href="/locations/ermington-west" className={classes.contactLink}>Belrose</Link>
                </li>
                <li>
                  <Link href="/locations/yarrawarrah" className={classes.contactLink}>Yarrawarrah</Link>
                </li>
                <li>
                  <Link href="/locations/ermington-west" className={classes.contactLink}>West Hoxton</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // Fetch all entries of content_type `blogPost`
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)

  const studioLocations = await client
    .getEntries({ content_type: "studioLocations" })
    .then((response) => response.items)

  const services = await client
    .getEntries({ content_type: "services" })
    .then((response) => response.items)

  const aboutPages = await client
    .getEntries({ content_type: "aboutPages" })
    .then((response) => response.items)
  return {
    props: {
      posts,
      studioLocations,
      services,
      aboutPages
    },
  }
}

export default contactUs;

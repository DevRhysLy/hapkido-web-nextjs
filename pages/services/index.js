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
import Contact from "components/Contact/Contact.js";
import ServicePageList from "components/ServicePageList/ServicePageList.js";
import Testimonial from "components/Testimonials/Testimonial.js";
import Button from 'components/CustomButtons/Button.js';

const useStyles = makeStyles(styles);

const index = ({ posts, studioLocations, services, aboutPages, testimonials }) => {
  const classes = useStyles();
  return (
    <Layout studioLocations={studioLocations} services={services} aboutPages={aboutPages}>
      <Head>
        <title>Our Services | Hapkido College of Australia</title>
      </Head>
      <Parallax image="/img/hca-eagles-banner.jpeg" responsive={true}>
        <div className={classes.parallaxContainer}>
          <div className={classes.brand}>
            <h1 className={classes.title}>Hapkido College of Australia</h1>
            <h3 className={classes.subtitle}>
              A Passion for a History of Excellence.
            </h3>
          </div>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.indexRaised)}>
        <div className={classes.jumboHeadingContainer}>
          <h1 className={classes.jumboHeading}>Services!</h1>
        </div>
        <div className={classes.infoDivColumn}>
          <div className={classes.infoContent} >
            {/* <h3 className={classes.h3}>Our Services</h3>
            <h4 className={classes.h4}>Please <Link href="/contact-us"><a className={classes.contactLink}>contact us</a></Link> if you are interested in any of our services!</h4> */}
            <div>
            </div>
            <ServicePageList services={services} />
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

  const testimonials = await client
    .getEntries({ content_type: "testimonials" })
    .then((response) => response.items)
  return {
    props: {
      posts,
      studioLocations,
      services,
      aboutPages,
      testimonials
    },
  }
}

export default index;

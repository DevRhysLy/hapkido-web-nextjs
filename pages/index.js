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
import CardBody from "components/Card/CardBody.js";
import Contact from "components/Contact/Contact.js";
import ServiceList from "components/ServiceList/ServiceList.js";
import Testimonial from "components/Testimonials/Testimonial.js";

const useStyles = makeStyles(styles);

const index = ({ posts, studioLocations, services, aboutPages, testimonials }) => {
  const classes = useStyles();
  return (
    <Layout studioLocations={studioLocations} services={services} aboutPages={aboutPages}>
      <Parallax image="/img/hca-eagles-banner.jpeg" responsive={true}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} md={6}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Hapkido College of Australia</h1>
                <h3 className={classes.subtitle}>
                  A passion for a history of excellence.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.sections}>
          <div className={classes.container}>
            <Testimonial testimonials={testimonials}/>
          <Contact />
            <div className={classes.title}>
              <h2 className={classes.h2}>Our Services</h2>
              <h3 >Please <Link href="/contact-us">contact us</Link> if you are interested in any of our services!</h3>
              <div>
              <ServiceList services={services} />
              </div>
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

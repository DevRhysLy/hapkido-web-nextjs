import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";
//components used
import Layout from "components/Layout/Layout.js";
import Parallax from "components/Parallax/Parallax.js";
import Contact from "components/Contact/Contact.js";
import ServiceList from "components/ServiceList/ServiceList.js";
import Testimonial from "components/Testimonials/Testimonial.js";
import Button from 'components/CustomButtons/Button.js';
import Head from "next/head";
import Image from 'next/image'

import Gallery from "react-photo-gallery";


const useStyles = makeStyles(styles);

const photos = [

  {
    src: '/img/master-kim-4.webp',
    width: 1125,
    height: 1500
  },
  {
    src: '/img/master-kim.webp',
    width: 2250,
    height: 3000
  }
];

const index = ({ posts, studioLocations, services, aboutPages, testimonials }) => {
  const classes = useStyles();
  return (
    <Layout studioLocations={studioLocations} services={services} aboutPages={aboutPages}>
      <Head>
        <title>Hapkido College of Australia | A Passion for a History of Excellence</title>
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
          <h1 className={classes.jumboHeading}>Welcome to HCA!</h1>
        </div>
        <div className={classes.infoContainer} >
          <div className={classes.infoDivRow}>
            <div className={classes.infoContent}>
              <h3 className={classes.h3}>About</h3>
              <h4 className={classes.h4}>
                Hapkido College of Australia is a Martial Arts organisation dedicated to teaching
                excellence in Self-Defence, Fitness and Discipline to improve personal development,
                health and well-being to all ages.
              </h4>
              <Link href="/about/about-us">
                <a className={classes.linkBtn}>
                  <Button className={classes.buttonGrey}>
                    Learn More!
                  </Button>
                </a>
              </Link>

            </div>
            <div className={classes.infoContent}>
              <Image 
              layout="intrinsic" 
              src="/img/hca-banner-2.jpeg"
              height={1165}
              width={1750} />
            </div>
          </div>
        </div>

        <div className={classes.infoContainer}>
          <div className={classes.infoDivColumn}>
            <div className={classes.infoContent} >
              <h3 className={classes.h3}>Our Services</h3>
              <h4 className={classes.h4}>Please <Link href="/contact-us"><a className={classes.contactLink}>contact us</a></Link> if you are interested in any of our services!</h4>
              <div>
              </div>
              <ServiceList services={services} />

              <Link href="/services">
                <a className={classes.linkBtn}>
                  <Button className={classes.buttonGrey}>
                    View All {`>>`}
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.infoContainer}>
          <div className={classes.infoDivRow}>
            <div className={classes.infoContent}>
              <h3 className={classes.h3}>Our Master</h3>
              <div>
                <div className={classes.galleryContainerIndex}>
                  <Gallery photos={photos} />
                </div>
              </div>
              <h4 className={classes.h4}>Master Yong Kil Kim originates from South Korea and has over 30 years experience in studying and teaching various martial arts, predominantly Hapkido.</h4>
              <Link href="/about/our-master-and-instructors">
                <a className={classes.linkBtn}>
                  <Button className={classes.buttonGrey}>
                    More About Our Instructors {`>>`}
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.infoContainer}>
          <div className={classes.infoDivColumn}>
            <Testimonial testimonials={testimonials} />
          </div>
        </div>

        <div className={classes.infoContainer}>
          <div className={classes.infoDivColumn}>
            <div className={classes.infoContent} >
              <h3 className={classes.h3}>Contact Us</h3>
              <Contact />
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

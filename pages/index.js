import React, { useState, useEffect } from "react";
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

import News from "components/News/News.js";
import Button from "components/CustomButtons/Button.js";
import Head from "next/head";
import Image from "next/image";
import Card from "components/Card/Card.js";
import MobileIndexPage from "components/MobileIndexPage/MobileIndexPage";

import Gallery from "react-photo-gallery";

const useStyles = makeStyles(styles);

const photos = [
  {
    src: "/img/master-kim-4.webp",
    width: 1125,
    height: 1500,
    alt: "master-kim",
  },
  {
    src: "/img/master-kim.webp",
    width: 2250,
    height: 3000,
    alt: "master-kim",
  },
];

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
const index = ({
  posts,
  studioLocations,
  services,
  aboutPages,
  testimonials,
  news,
}) => {
  const classes = useStyles();
  const size = useWindowSize();
  return (
    <Layout
      studioLocations={studioLocations}
      services={services}
      aboutPages={aboutPages}
    >
      <Head>
        <title>
          Hapkido College of Australia | A Passion for a History of Excellence
        </title>
        <meta
          name="description"
          content="The Hapkido College of Australia (HCA) is a Martial Arts 
            organisation dedicated to teaching excellence in Self-Defence, 
            Fitness and Discipline to improve personal development, health and 
            well-being to all ages."
        />
      </Head>
      {size.width > 650 ? (
        <Parallax
          image="/img/hca-eagles-banner.jpeg"
          alt="Hapkido College of Australia"
          responsive={true}
        >
          <div className={classes.parallaxContainer}>
            <div className={classes.brand}>
              <h1 className={classes.title}>Hapkido College of Australia</h1>
              <h3 className={classes.subtitle}>
                A Passion for a History of Excellence.
              </h3>
            </div>
          </div>
        </Parallax>
      ) : (
        <Parallax
          image="/img/hca-eagles-banner.jpeg"
          alt="Hapkido College of Australia"
          responsive={true}
        >
          {/* <div className={classes.parallaxContainer}> */}
          <div className={classes.mobileBrand}>
            <h1 className={classes.title}>Hapkido College of Australia</h1>
            <h3>What are you looking for?</h3>
            <MobileIndexPage />
          </div>
          {/* </div> */}
        </Parallax>
      )}

      <div className={classNames(classes.main, classes.indexRaised)}>
        <div className={classes.jumboHeadingContainer}>
          <div className={classes.infoContainer}>
            <div className={classes.infoDivRow}>
              <div className={classes.infoContent}>
                <News news={news} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.infoDivRow}>
            <div className={classes.infoContent}>
              <h3 className={classes.h3}>About</h3>
              <h4 className={classes.h4}>
                Hapkido College of Australia is a Martial Arts organisation
                dedicated to teaching excellence in Self-Defence, Fitness and
                Discipline to improve personal development, health and
                well-being to all ages.
              </h4>
              <Link href="/about/about-us" className={classes.linkBtn}>

                <Button className={classes.buttonGrey}>Learn More!</Button>

              </Link>
            </div>
            <div className={classes.infoContent}>
              <Image
                alt="About - Hapkido College of Australia"
                layout="intrinsic"
                src="/img/hca-banner-2.jpeg"
                height={1165}
                width={1750}
              />
            </div>
          </div>
        </div>

        <div className={classes.infoContainer}>
          <div className={classes.infoDivColumn}>
            <div className={classes.infoContent}>
              <h3 className={classes.h3}>Our Services</h3>
              <h4 className={classes.h4}>
                Please{" "}
                <Link href="/contact-us" className={classes.contactLink}>
                  contact us
                </Link>{" "}
                if you are interested in any of our services!
              </h4>
              <div></div>
              <ServiceList services={services} />

              <Link href="/services" className={classes.linkBtn}>

                <Button className={classes.buttonGrey}>
                  View All {`>>`}
                </Button>

              </Link>
            </div>
          </div>
        </div>
        {size.width > 650 ? (
          <div className={classes.infoContainer}>
            <div className={classes.infoDivRow}>
              <div className={classes.infoContent}>
                <h3 className={classes.h3}>Our Master</h3>
                <div>
                  <div className={classes.galleryContainerIndex}>
                    <Gallery photos={photos} />
                  </div>
                </div>
                <h4 className={classes.h4}>
                  Master Yong Kil Kim originates from South Korea and has over
                  30 years experience in studying and teaching various martial
                  arts, predominantly Hapkido.
                </h4>
                <Link href="/about/our-master-and-instructors" className={classes.linkBtn}>

                  <Button className={classes.buttonGrey}>
                    More About Our Instructors {`>>`}
                  </Button>

                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <div className={classes.infoContainer}>
          <div className={classes.infoDivColumn}>
            <Testimonial testimonials={testimonials} />
          </div>
        </div>

        <div className={classes.infoContainer}>
          <div className={classes.infoDivColumn}>
            <div className={classes.infoContent}>
              <h3 className={classes.h3}>Contact Us</h3>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch all entries of content_type `blogPost`
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items);

  const studioLocations = await client
    .getEntries({ content_type: "studioLocations" })
    .then((response) => response.items);

  const services = await client
    .getEntries({ content_type: "services" })
    .then((response) => response.items);

  const aboutPages = await client
    .getEntries({ content_type: "aboutPages" })
    .then((response) => response.items);

  const testimonials = await client
    .getEntries({ content_type: "testimonials" })
    .then((response) => response.items);

  const news = await client
    .getEntries({ content_type: "news" })
    .then((response) => response.items);
  return {
    props: {
      posts,
      studioLocations,
      services,
      aboutPages,
      testimonials,
      news,
    },
  };
}

export default index;

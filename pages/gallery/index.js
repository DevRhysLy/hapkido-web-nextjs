import React, { useState, useCallback } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
//components used
import Layout from "components/Layout/Layout.js";
import Parallax from "components/Parallax/Parallax.js";
import Head from "next/head";
import Link from "next/link"
import GalleryList from "components/GalleryList/GalleryList.js";
import { height } from "@material-ui/system";

const useStyles = makeStyles(styles);

const GalleryPage = ({ studioLocations, services, aboutPages, imageGallery = [] }) => {

    const classes = useStyles();

    return (
        <Layout studioLocations={studioLocations} services={services} aboutPages={aboutPages}>
            <Head>
                <title>Our Gallery | Hapkido College of Australia</title>
            </Head>
            <Parallax image="/img/hca-banner-2.jpeg" responsive={true}>
                <div className={classes.parallaxContainer}>
                    <div className={classes.brand}>
                        <h1 className={classes.title}>Hapkido College of Australia</h1>
                        <h3 className={classes.subtitle}>
                            Our latest images from recent events
                        </h3>
                    </div>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.indexRaised)}>
                <div className={classes.container}>
                    <div className={classes.jumboHeadingContainer}>
                        <h1 className={classes.jumboHeading}>Our Gallery</h1>
                        <GalleryList imageGallery={imageGallery}/>
                        {/* <ul className={classes.ul}>
                        {imageGallery.map((subGallery) => <li className={classes.li}>
                            <Link href={`/gallery/${subGallery.fields.slug}`}>
                            <div className={classes.listDiv}>
                                <a className={classes.contactLink}>{subGallery.fields.title}
                                </a>
                                <img style={{width:"200px", boxShadow: "3px 3px 3px 3px #2b2b2b30", borderRadius:"8px"}} src={subGallery.fields.images[0].fields.file.url} />
                                </div>
                                </Link>
                                </li>)}
                    </ul> */}
                    </div>
            </div>
            </div>
        </Layout >
    );
}

export async function getStaticProps() {
    // Create an instance of the Contentful JavaScript SDK
    const client = require("contentful").createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })

    // Fetch all entries of content_type that is wanted
    const studioLocations = await client
        .getEntries({ content_type: "studioLocations" })
        .then((response) => response.items)

    const services = await client
        .getEntries({ content_type: "services" })
        .then((response) => response.items)

    const instructors = await client
        .getEntries({ content_type: "mainInstructor" })
        .then((response) => response.items)

    const aboutPages = await client
        .getEntries({ content_type: "aboutPages" })
        .then((response) => response.items)

    const imageGallery = await client
        .getEntries({ content_type: "imageGallery" })
        .then((response) => response.items)
    return {
        props: {
            studioLocations,
            services,
            instructors,
            aboutPages,
            imageGallery
        },
    }
}

export default GalleryPage;

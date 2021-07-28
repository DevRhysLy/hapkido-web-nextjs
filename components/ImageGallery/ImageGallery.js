import React, { useState, useCallback } from "react";
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
import Head from "next/head"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const useStyles = makeStyles(styles);

const ImageGallery = ({ subGallery = [] }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    const classes = useStyles();

    const photosArray = subGallery.fields.images.map(photo => {
        return {
            src: photo.fields.file.url,
            width: photo.fields.file.details.image.width,
            height: photo.fields.file.details.image.height
        }
    })

    console.log("photos",photosArray)

    return (
        <div>
            <div>
                {subGallery.fields.title}
            </div>
      <Gallery photos={photosArray} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photosArray.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    );
}
export default ImageGallery;

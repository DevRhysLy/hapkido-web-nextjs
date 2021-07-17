/*eslint-disable*/
import React from "react";
import Link from "next/link"
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "styles/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer({ studioLocations = [], services = [], aboutPages = [] }) {
  const classes = useStyles();
  return (
    // <footer className={footerClasses}>
    <div className={classes.container}>
      <div>
        <div className={classes.left}>
          <List className={classes.list}>
            <div className={classes.linkHeading}>About</div>
            {aboutPages.map((aboutPage, id) => (
              <div key={aboutPage.sys.id}>
                <Link className={classes.footerLink} key={id} href={`/about/${aboutPage.fields.slug}`}>
                  <a className={classes.footerLink}>{aboutPage.fields.title}</a>
                </Link>
              </div>
            ))}
          </List>
        </div>
        <div className={classes.left}>
          <List className={classes.list}>
            <div className={classes.linkHeading}>Services</div>
            {services.map((service, id) => (
              <div key={service.sys.id}>
                <Link className={classes.footerLink} href={`/services/${service.fields.slug}`}>
                  <a className={classes.footerLink}>{service.fields.service}</a>
                </Link>
              </div>
            ))}
          </List>
        </div>
        <div className={classes.left}>
          <List className={classes.list}>
            <div className={classes.linkHeading}>Locations</div>
            {studioLocations.map((studio) => (
              <div key={studio.sys.id}>
                <Link className={classes.footerLink} href={`/locations/${studio.fields.slug}`}>
                  <a className={classes.footerLink}>{studio.fields.location}</a>
                </Link>
              </div>
            ))}
          </List>
        </div>
      </div>
      <div className={classes.right}>
        &copy; {1900 + new Date().getYear()} Hapkido College of Australia
      </div>
    </div>
    // </footer>
  );
}
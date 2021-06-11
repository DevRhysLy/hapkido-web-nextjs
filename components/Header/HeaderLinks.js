/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks({ studioLocations = [], services = [], aboutPages = [] }) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="About Us"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          hoverColor="black"
          buttonIcon={LocationOnIcon}
          dropdownList={[
            aboutPages.map((aboutPage, id) => (
              <Link key={id} href={`/about/${aboutPage.fields.slug}`}>
                <a className={classes.dropdownLink}>{aboutPage.fields.title}</a>
              </Link>
            )),
            <Link href="/about/our-master-and-instructors">
              <a className={classes.dropdownLink}>Our Master and Instructors</a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          hoverColor="none"
          buttonIcon={LocationOnIcon}
          dropdownList={[
            services.map((service, id) => (
              <Link key={id} href={`/services/${service.fields.slug}`}>
                <a className={classes.dropdownLink}>{service.fields.service}</a>
              </Link>
            ))
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Locations"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          hoverColor="none"
          buttonIcon={LocationOnIcon}
          dropdownList={[
            studioLocations.map((studio) => (
              <div key={studio.sys.id}>
                <Link href={`/locations/${studio.fields.slug}`}>
                  <a className={classes.dropdownLink}>{studio.fields.location}</a>
                </Link>
              </div>
            ))
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on Facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/HapkidoCollegeofAustralia"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on Instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/hapkido_college_of_australia/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

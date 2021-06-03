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

export default function HeaderLinks({ studioLocations = [] }) {
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
            <Link href="/components">
              <a className={classes.dropdownLink}>Croydon</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Ermington West</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Belrose</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Yarrawarrah</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>West Hoxton</a>
            </Link>,
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
          hoverColor="black"
          buttonIcon={LocationOnIcon}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Croydon</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Ermington West</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Belrose</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Yarrawarrah</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>West Hoxton</a>
            </Link>,
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
          hoverColor="black"
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
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
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
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
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

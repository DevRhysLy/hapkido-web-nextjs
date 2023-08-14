import React from "react";
import Link from "next/link";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import NavPills from "components/NavPills/NavPills.js";

import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "styles/jss/nextjs-material-kit.js";
import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";
import index from "styles/jss/nextjs-material-kit/pages/components.js";
import Button from "components/CustomButtons/Button.js";
import CardImage from "components/Card/CardImage.js";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const styles = {
  ...imagesStyles,
  cardTitle,
  cardLink,
  cardSubtitle,
  index,
};

const useStyles = makeStyles(styles);

export default function MobileIndexPage({ services = [] }) {
  const classes = useStyles();
  return (
    // <GridContainer spacing={4}>
    //   <GridItem xs={6} sm={4} md={4} key="1">
    //     <Link href={"/locations/croydon"}>
    //       <Card>
    //         <CardImage
    //           src="/img/hca-eagles-banner.jpeg"
    //         />
    //         <CardBody>
    //           <h4 className={classes.cardTitle}>Croydon</h4>
    //         </CardBody>
    //       </Card>
    //     </Link>
    //   </GridItem>
    //   <GridItem xs={6} sm={4} md={4} key="2">
    //     <Link href={"/locations/ermington"}>
    //       <a className={classes.serviceCardLink}>
    //         <Button color="primary" round>
    //           Ermington
    //         </Button>
    //       </a>
    //     </Link>
    //   </GridItem>
    //   <GridItem xs={6} sm={4} md={4} key="3">
    //     <Link href={"/locations/belrose"}>
    //       <a className={classes.serviceCardLink}>
    //         <Button color="primary" round>
    //           Belrose
    //         </Button>
    //       </a>
    //     </Link>
    //   </GridItem>
    //   <GridItem xs={6} sm={4} md={4} key="3">
    //     <Link href={"/services"}>
    //       <a className={classes.serviceCardLink}>
    //         <Button color="primary" round>
    //           Services
    //         </Button>
    //       </a>
    //     </Link>
    //   </GridItem>
    // </GridContainer>
    <div>
      <NavPills
        color="info"
        tabs={[
          {
            tabButton: "Croydon",
            tabContent: (
              <span>
                <h3>Croydon</h3>
                <p>
                  Croydon is our main studio located on{" "}
                  <a href="https://www.google.com/maps/place/Hapkido+College+of+Australia/@-33.870097,151.1135209,15z/data=!4m5!3m4!1s0x0:0x55abf14ed3579568!8m2!3d-33.8700621!4d151.113373">
                    Parramatta Rd
                  </a>
                  . Here we offer, Little Tigers, Children Classes, Youth
                  Classes, Adult Classes, Private Lessons, School Courses and
                  Birthday Parties.{" "}
                  <Link href={"/locations/croydon"} className={classes.serviceCardLink}>
                    Learn more
                  </Link>{" "}
                  about our Croydon Studio or our{" "}
                  <Link href={"/services"} className={classes.serviceCardLink}>
                    Services
                  </Link>{" "}
                </p>
              </span>
            ),
          },
          {
            tabButton: "Ermington",
            tabContent: (
              <span>
                <h3>Ermington</h3>
                <p>
                  Our part-time Ermington Studio is located in{" "}
                  <a href="https://www.google.com/maps/place/Hapkido+College+of+Australia/@-33.8063846,151.0582508,15z/data=!4m2!3m1!1s0x0:0x994a029920552c9c?sa=X&ved=2ahUKEwjzvtuG_Ov6AhVetmMGHbSoD18Q_BJ6BAhXEB8">
                    Ermington West Public School
                  </a>
                  . Here we offer, Children Classes and Youth/Adult Classes.{" "}
                  <Link href={"/locations/ermington"} className={classes.serviceCardLink}>
                    Learn more
                  </Link>{" "}
                  about our Ermington Studio or our{" "}
                  <Link href={"/services"} className={classes.serviceCardLink}>
                    Services
                  </Link>{" "}
                </p>
              </span>
            ),
          },
          {
            tabButton: "Belrose",
            tabContent: (
              <span>
                <h3>Belrose</h3>
                <p>
                  Our part-time Belrose Studio is located in{" "}
                  <a href="https://www.google.com/maps/place/HCA+Belrose/@-33.7407951,151.2106619,15z/data=!4m5!3m4!1s0x0:0x868755c94a57ff43!8m2!3d-33.7407951!4d151.2106619">
                    Lionel Watts Sports {"&"} Community Centre
                  </a>
                  . Here we offer, Children Classes and Youth/Adult Classes.{" "}
                  <Link href={"/locations/belrose"} className={classes.serviceCardLink}>
                    Learn more
                  </Link>{" "}
                  about our Belrose Studio or our{" "}
                  <Link href={"/services"} className={classes.serviceCardLink}>
                    Services
                  </Link>{" "}
                </p>
              </span>
            ),
          },
          {
            tabButton: "Services",
            tabContent: (
              <span>
                <h3>Services</h3>
                <p>
                  We offer services such as Children Classes, Youth Classes,
                  Adult Classes, Private Lessons, School Courses and Birthday
                  Parties.{" "}
                  <Link href={"/services"} className={classes.serviceCardLink}>
                    Click here
                  </Link>{" "}
                  to learn more about what we offer
                </p>
              </span>
            ),
          },
        ]}
      />
    </div>
  );
}

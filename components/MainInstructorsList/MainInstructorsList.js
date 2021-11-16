import React from "react";
import Link from "next/link";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "styles/jss/nextjs-material-kit.js";
import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";
import Button from "components/CustomButtons/Button.js";
import CardImage from "components/Card/CardImage.js";

const styles = {
  ...imagesStyles,
  cardTitle,
  cardLink,
  cardSubtitle,
};

const useStyles = makeStyles(styles);

export default function MainInstructorList({ instructors = [] }) {
  const classes = useStyles();
  return (
    <GridContainer spacing={4}>
      {instructors.map((instructor) => (
        <GridItem xs={12} sm={6} md={4} key={instructor.sys.id}>
          <Link
            href={`/about/our-master-and-instructors/${instructor.fields.slug}`}
          >
            <a className={classes.serviceCardLink}>
              <Card>
                <CardImage
                  src={`https:${instructor.fields.avatar.fields.file.url}`}
                  alt={instructor.fields.name}
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    {instructor.fields.name}
                  </h4>
                  <p
                    style={
                      instructor.fields.bio.length > 120
                        ? {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }
                        : { fontSize: "14px" }
                    }
                  >
                    {instructor.fields.bio}
                  </p>
                  <Button color="primary" round>
                    Learn More
                  </Button>
                </CardBody>
              </Card>
            </a>
          </Link>
        </GridItem>
      ))}
    </GridContainer>
  );
}

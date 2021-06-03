import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Select from 'react-select';
import TextareaAutosize from 'react-textarea-autosize';

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

const ageGroup = [
  { value: 'Little Tigers: 4 - 5 Years old', label: 'Little Tigers: 4 - 5 Years old' },
  { value: 'Childrens: 6 - 11 Years old', label: 'Childrens: 6 - 11 Years old' },
  { value: 'Youth: 12 - 17 Years old', label: 'Youth: 12 - 17 Years old' },
  { value: 'Adults: 18+', label: 'Adults 18+' }
]
const studioLocation = [
  { value: 'Croydon HQ', label: 'Croydon HQ' },
  { value: 'Ermington West', label: 'Ermington West' },
  { value: 'Belrose', label: 'Belrose' },
  { value: 'Yarrawarrah', label: 'Yarrawarrah' },
  { value: 'West Hoxton', label: 'West Hoxton' }

]

export default function SectionLogin() {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={12} md={10}>
        <Card>
          <form className={classes.form}>
            <h4>Come for a free trial lesson</h4>
            <p className={classes.divider}>If you are interested in our college you are welcome to try it out.</p>
            <CardBody>
              <CustomInput
                labelText="Your Name"
                id="name"
                formControlProps={{
                  fullWidth: true
                }}
              />
              <Select options={ageGroup} />
              <Select options={studioLocation} />
              <CustomInput
                labelText="Your Email"
                id="email"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "email"
                }}
              />
              <TextareaAutosize
                minRows={2}
                maxRows={6}
                defaultValue="Just a single line..."
              />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button type="button" color="info" size="lg">
                Send Enquiry
                  </Button>
            </CardFooter>
          </form>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

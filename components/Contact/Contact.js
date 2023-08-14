import React, { Component, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import toast, { Toaster } from "react-hot-toast";
import { Select, MenuItem, InputLabel } from "@material-ui/core";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//age options
const ageGroupOptions = [
  {
    label: "Little Tigers: 4 - 5 Years old",
    value: "Little Tigers: 4 - 5 Years old",
  },
  {
    label: "Childrens: 6 - 11 Years old",
    value: "Childrens: 6 - 11 Years old",
  },
  {
    label: "Youth: 12 - 17 Years old",
    value: "Youth: 12 - 17 Years old",
  },
  {
    label: "Adults 18+",
    value: "Adults 18+",
  },
  {
    label: "Demonstration Team",
    value: "Demonstration Team",
  },
  {
    label: "Private Lessons",
    value: "Private Lessons",
  },
  {
    label: "Birthday Parties",
    value: "Birthday Parties",
  },
  {
    label: "School Courses",
    value: "School Courses",
  },
  {
    label: "Other",
    value: "Other",
  },
];
//studio options
const studioLocationOptions = [
  {
    label: "Croydon HQ",
    value: "Croydon HQ",
  },
  {
    label: "Ermington West",
    value: "Ermington West",
  },
  {
    label: "Belrose",
    value: "Belrose",
  },
];

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      email: "",
      firstName: "",
      age: "",
      studio: "",
      phone: "",
      showForm: false,
      sendingMessage: false,
      messageSent: false,
      messageError: false,
      studioOptions: studioLocationOptions,
      ageOptions: ageGroupOptions,
    };
  }

  notify = () => {
    toast.success("Enquiry sent! We will get back to you ASAP!", {
      duration: 5000,
      position: "bottom-center",
    });
  };

  //when a user types there data handle the changes
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      sendingMessage: true,
    });
    this.sendMessage();
  };
  sendMessage = () => {
    //puts form data into google form
    const formData = new FormData();
    formData.append(process.env.GOOGLE_FORM_MESSAGE_ID, this.state.message);
    formData.append(process.env.GOOGLE_FORM_EMAIL_ID, this.state.email);
    formData.append(process.env.GOOGLE_FORM_PHONE_ID, this.state.phone);
    formData.append(process.env.GOOGLE_FORM_NAME_ID, this.state.firstName);
    formData.append(process.env.GOOGLE_FORM_AGE_OR_SERVICE_ID, this.state.age);
    formData.append(
      process.env.GOOGLE_FORM_STUDIO_LOCATION_ID,
      this.state.studio
    );
    console.log(this.state.firstName);
    axios
      .post(process.env.GOOGLE_FORM_ACTION, formData)
      .then(() => {
        this.setState({
          messageSent: true,
          sendingMessage: false,
          message: "",
          email: "",
          phone: "",
          firstName: "",
          age: "",
          studio: "",
        });
      })
      .catch(() => {
        this.notify();
      });
  };
  render() {
    const { studioOptions, age, studio, ageOptions } = this.state;
    return (
      <div>
        <div style={{ margin: "24px" }}>
          <Toaster />
          <Grid
            container
            spacing={4}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <form onSubmit={this.handleSubmit}>
                <Grid item style={{ margin: 10 }}>
                  <TextField
                    name="firstName"
                    id="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    required
                    fullWidth
                    placeholder="Your Name"
                    label="Full Name"
                  />
                </Grid>
                <Grid item
                style={{ margin: 10 }}>
                  <TextField
                    name="email"
                    id="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    placeholder="your@email.com"
                    label="Email"
                    fullWidth
                  />
                </Grid>
                <Grid item style={{ margin: 10 }}>
                  <InputLabel>Phone Number</InputLabel>
                  <PhoneInput
                    placeholder="(04) 1234 5678"
                    country={"au"}
                    onlyCountries={["au"]}
                    value={this.state.phone}
                    onChange={(phone) => this.setState({ phone })}
                    containerStyle={{
                      border: "0px",
                      width: "auto",
                      borderRadius: "3px",
                    }}
                    inputStyle={{
                      border: "0px",
                      width: "auto",
                    }}
                    buttonStyle={{ borderRadius: "0px" }}
                    inputProps={{
                      required: true,
                    }}
                    disableDropdown
                    disableCountryCode
                  />
                </Grid>
                <Grid item style={{ margin: 10 }}>
                  <InputLabel>Age Group/Service</InputLabel>
                  <Select
                    fullWidth
                    label="Age Group/Service"
                    value={age}
                    onChange={(event) =>
                      this.setState({
                        age: event.target.value,
                      })
                    }
                  >
                    {ageOptions.map((option) => (
                      <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item style={{ margin: 10 }}>
                  <InputLabel>Studio</InputLabel>
                  <Select
                    fullWidth
                    label="Studio"
                    value={studio}
                    onChange={(event) =>
                      this.setState({
                        studio: event.target.value,
                      })
                    }
                  >
                    {studioOptions.map((option) => (
                      <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item style={{ margin: 10 }}>
                  <TextField
                    fullWidth
                    name="message"
                    id="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    required
                    multiline
                    rows={6}
                    placeholder="Your Message"
                  />
                </Grid>

                <Button variant="contained" type="submit">SEND</Button>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;

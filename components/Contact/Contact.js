import React, { Component, useState } from "react";
import {
  Box,
  Text,
  Grommet,
  Form,
  FormField,
  Heading,
  Header,
  TextArea,
  Select,
  TextInput,
} from "grommet";
import axios from "axios";
import Button from "components/CustomButtons/Button.js";
import toast, { Toaster } from "react-hot-toast";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//age options
const ageGroupOptions = [
  "Little Tigers: 4 - 5 Years old",
  "Childrens: 6 - 11 Years old",
  "Youth: 12 - 17 Years old",
  "Adults 18+",
  "Demonstration Team",
  "Private Lessons",
  "Birthday Parties",
  "School Courses",
  "Other",
];
//studio options
const studioLocationOptions = [
  "Croydon HQ",
  "Ermington West",
  "Belrose",
  "Yarrawarrah",
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
    console.log(this.state.phone);
    console.log(this.state.firstName);
    //sends data using the google form
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
          <Form onSubmit={this.handleSubmit}>
            <FormField label="Name">
              <TextInput
                name="firstName"
                id="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
                placeholder="Your Name"
              />
            </FormField>
            <FormField label="Email">
              <TextInput
                name="email"
                id="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
                placeholder="your@email.com"
              />
            </FormField>
            <FormField label="Phone">
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
            </FormField>
            <FormField label="Age Group/Service">
              <Select
                value={age}
                onChange={(event) =>
                  this.setState({
                    age: event.value,
                  })
                }
                options={ageOptions}
              />
            </FormField>
            <FormField label="Studio Location">
              <Select
                value={studio}
                onChange={(event) =>
                  this.setState({
                    studio: event.value,
                  })
                }
                options={studioOptions}
              />
            </FormField>
            <FormField label="Message">
              <TextArea
                name="message"
                id="message"
                value={this.state.message}
                onChange={this.handleChange}
                required
                placeholder="Your Message"
                required
                rows="6"
              />
            </FormField>
            <div style={{ textAlign: "center" }}>
              <Button type="submit" color="info">
                Send
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default Contact;

import React, { Component, useState } from "react";
import { Box, Text, Grommet, Form, FormField, Heading, Header, TextArea, Select, TextInput } from "grommet";
import { FormDown, FormUp } from "grommet-icons";
import styled from "styled-components";
import axios from 'axios';
import Button from 'components/CustomButtons/Button.js';

//form fields
const GOOGLE_FORM_NAME_ID = "entry.331089697"
const GOOGLE_FORM_EMAIL_ID = "entry.2027886443"
const GOOGLE_FORM_AGE_OR_SERVICE_ID = "entry.1200914398"
const GOOGLE_FORM_STUDIO_LOCATION_ID = "entry.782662881"
const GOOGLE_FORM_MESSAGE_ID = "entry.1698893146"
//google post action
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfrT-beEOnvaPtzcdZ141Km45kSNwvuodFxrM2LrXUNaHABgQ/formResponse"

//age options
const ageGroupOptions = [
    'Little Tigers: 4 - 5 Years old',
    'Childrens: 6 - 11 Years old',
    'Youth: 12 - 17 Years old',
    'Adults 18+',
    'Demonstration Team',
    'Private Lessons',
    ''
]
//studio options
const studioLocationOptions = [
    'Croydon HQ',
    'Ermington West',
    'Belrose',
    'Yarrawarrah',
    'West Hoxton'
]

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: '',
            email: '',
            firstName: '',
            age: '',
            studio: '',
            showForm: false,
            sendingMessage: false,
            messageSent: false,
            messageError: false,
            studioOptions: studioLocationOptions,
            ageOptions: ageGroupOptions
        }
    }

    //when a user types there data handle the changes
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = () => {
        console.log(this.state.firstName);
        console.log(this.state.email);
        console.log(this.state.age);
        console.log(this.state.studio);
    }

    render() {
        const { studioOptions, selectedAge, selectedStudio, age, studio, ageOptions } = this.state;
        return (
            <div>
                Contact us for a free Trial lesson!
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <FormField label="Name">
                            <TextInput
                                name='firstName'
                                id='firstName'
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                required
                                placeholder="Your Name"
                            />
                        </FormField>
                        <FormField label="Email">
                            <TextInput
                                name='email'
                                id='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                                placeholder="your@email.com"
                            />
                        </FormField>
                        <FormField label="Age Group">
                            <Select
                                value={age}
                                onChange={event =>
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
                                onChange={event =>
                                    this.setState({
                                        studio: event.value,
                                    })
                                }
                                options={studioOptions}
                            />
                        </FormField>
                        <Button type="submit" color="info">Send</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Contact;
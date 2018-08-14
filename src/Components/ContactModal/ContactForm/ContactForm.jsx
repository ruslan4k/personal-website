import React, { Component } from "react";
import {
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Form,
  Button
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const ContactForm = ({ toggle }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        message: ""
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email not valid")
          .required("Email is required"),
        name: Yup.string().required("Name is required!"),
        message: Yup.string().required("Message is required!")
      })}
      onSubmit={values => {
        alert(JSON.stringify(values));
        toggle();
      }}
      render={({
        errors,
        touched,
        handleChange,
        values,
        handleSubmit,
        handleBlur
      }) => (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Your Email</Label>
            <Input
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              name="email"
              onBlur={handleBlur}
              invalid={touched.email && errors.hasOwnProperty("email")}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Your Name</Label>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              placeholder="Enter your Name"
              onBlur={handleBlur}
              invalid={touched.name && errors.hasOwnProperty("name")}
            />
            <FormFeedback>{errors.name}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Your Message</Label>
            <Input
              type="textarea"
              name="message"
              placeholder="Enter your Message"
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
              invalid={touched.message && errors.hasOwnProperty("message")}
            />
            <FormFeedback>{errors.message}</FormFeedback>
          </FormGroup>

          <div style={{ float: "right" }}>
            <Button
              style={{ marginRight: "10px" }}
              color="primary"
              type="submit"
            >
              Submit
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </div>
        </Form>
      )}
    />
  );
};

export default ContactForm;

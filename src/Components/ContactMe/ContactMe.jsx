import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import './ContactMe.scss';
import { FormGroup, Input, FormFeedback, Form } from 'reactstrap';
import swal from '@sweetalert/with-react';

const ContactMe = () => (
  <div id="contact" className="contact-form-styles bg_color--5">
    <div className="container">
      <div className="row row--35 align-items-center">
        <div className="col-lg-6 order-2 order-lg-1">
          <div className="section-title text-left mb--50">
            <h2 className="title">Contact Me</h2>
          </div>
          <div className="form-wrapper">
            <Formik
              initialValues={{
                email: '',
                name: '',
                subject: '',
                message: '',
              }}
              validationSchema={yup.object().shape({
                email: yup.string().email('Email not valid').required('Email is required'),
                name: yup.string().required('Name is required!'),
                subject: yup.string().required('Subject is required!'),
                message: yup.string().required('Message is required!'),
              })}
              onSubmit={async (values, { resetForm }) => {
                try {
                  await fetch('https://us-central1-fake-data-generator-292318.cloudfunctions.net/contact_form_request', {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  });
                  resetForm();
                  swal({ title: 'Success!', text: 'You message has been sent!', icon: 'success' });
                } catch (error) {
                  swal({
                    title: 'Failure',
                    text: 'Some Error Occurred. Please, contact me using my social links',
                    icon: 'error',
                  });
                }
              }}
              render={({ errors, touched, handleChange, values, handleSubmit, handleBlur }) => (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Input
                      type="text"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                      onBlur={handleBlur}
                      invalid={touched.email && errors.email}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      placeholder="Enter your Name"
                      onBlur={handleBlur}
                      invalid={touched.name && errors.name}
                    />
                    <FormFeedback>{errors.name}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      value={values.subject}
                      placeholder="Write a Subject"
                      onBlur={handleBlur}
                      invalid={touched.subject && errors.subject}
                    />
                    <FormFeedback>{errors.subject}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="message"
                      placeholder="Enter your Message"
                      onChange={handleChange}
                      value={values.message}
                      onBlur={handleBlur}
                      invalid={touched.message && errors.message}
                    />
                    <FormFeedback>{errors.message}</FormFeedback>
                  </FormGroup>
                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                </Form>
              )}
            />
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <div className="thumbnail mb_md--30 mb_sm--30">
            <img src="/assets/images/letsContact.png" alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ContactMe;

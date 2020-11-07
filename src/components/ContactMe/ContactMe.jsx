import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import './ContactMe.scss';
import { FormGroup, Input, FormFeedback, Form, Spinner } from 'reactstrap';
import swal from '@sweetalert/with-react';
import letsContactImage from '../../assets/images/letsContact.png';

const contactFormValidationSchema = yup.object().shape({
  email: yup.string().email('Email not valid').required('Email is required'),
  name: yup.string().required('Name is required!'),
  subject: yup.string().required('Subject is required!'),
  message: yup.string().required('Message is required!'),
});

const ContactMe = () => {
  const [isLoading, setLoading] = useState(false);
  const submitForm = async (values, resetForm) => {
    try {
      setLoading(true);
      await fetch('https://us-central1-fake-data-generator-292318.cloudfunctions.net/contact_form_request', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      resetForm();
      setLoading(false);
      swal({ title: 'Success!', text: 'You message has been sent!', icon: 'success' });
    } catch (error) {
      setLoading(false);
      swal({
        title: 'Failure',
        text: 'Some Error Occurred. Please, contact me using my social links',
        icon: 'error',
      });
    }
  };

  const inputItems = (values, touched, errors) => [
    { type: 'text', name: 'email', placeholder: 'Enter your email', value: values.email, invalid: touched.name && errors.name },
    { type: 'text', name: 'name', placeholder: 'Enter your Name', value: values.name, invalid: touched.email && errors.email },
    {
      type: 'text',
      name: 'subject',
      placeholder: 'Write a Subject',
      value: values.subject,
      invalid: touched.subject && errors.subject,
    },
    {
      type: 'textarea',
      name: 'message',
      placeholder: 'Enter your Message',
      value: values.message,
      invalid: touched.message && errors.message,
    },
  ];

  return (
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
                validationSchema={contactFormValidationSchema}
                onSubmit={(values, { resetForm }) => submitForm(values, resetForm)}
                render={({ errors, touched, handleChange, values, handleSubmit, handleBlur }) => (
                  <Form onSubmit={handleSubmit}>
                    {inputItems(values, touched, errors).map(({ type, name, invalid, value, placeholder }) => (
                      <FormGroup key={name}>
                        <Input
                          type={type}
                          placeholder={placeholder}
                          value={value}
                          onChange={handleChange}
                          name={name}
                          onBlur={handleBlur}
                          invalid={invalid}
                        />
                        <FormFeedback>{errors.email}</FormFeedback>
                      </FormGroup>
                    ))}
                    <button
                      disabled={isLoading}
                      className="rn-button-style btn-solid"
                      type="submit"
                      value="submit"
                      name="submit"
                      id="mc-embedded-subscribe"
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <span className="mr-2">Submit</span>
                        {isLoading && <Spinner color="primary" size="xs" />}
                      </div>
                    </button>
                  </Form>
                )}
              />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <img src={letsContactImage} alt="illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

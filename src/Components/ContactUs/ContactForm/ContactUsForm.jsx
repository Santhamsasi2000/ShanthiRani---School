import React, { lazy, Suspense } from "react";
import { Formik, Form } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import FormField from "./FormField";
import StandardDropdown from "./StandardDropdown";

const Swal = lazy(() => import("sweetalert2"));

const ContactUsForm = () => {
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    formData.append("access_key", "f67d7f82-1e54-4756-9d5b-4befbf4bc88d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        const { default: Swal } = await import("sweetalert2");
        Swal.fire({
          title: "MESSAGE SENT !",
          text: "Thanks for contacting us. You will receive a response within two hours. If you do not receive a response from us, please call '6382174912'.",
          icon: "success",
        });
        resetForm();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      const { default: Swal } = await import("sweetalert2");
      Swal.fire({
        title: "Error",
        text: error.message || "Network error. Please try again.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const standardOptions = [
    "Pre Kg", "LKG", "UKG", "I STD", "II STD", "III STD", "IV STD", "V STD",
    "VI STD", "VII STD", "VIII STD", "IX STD", "X STD", "XI STD", "XII STD",
  ];

  return (
    <section className="d-flex">
      <Formik
        initialValues={{
          studentName: "",
          studentStandard: "",
          email: "",
          mobileNumber: "",
          subject: "",
          message: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-100">
            <p className="subTitle text-start fs-5 mb-1">GET IN TOUCH</p>
            <p className="mb-3">
            Feel free to use the below form to share your experience, questions, concerns, or Admission Enquiry.
            </p>

            <FormField name="studentName" label="Student's Name" placeholder="Enter Student's Name*" />
            <StandardDropdown options={standardOptions} name="studentStandard" />
            <FormField name="email" label="Email Address (Optional)" type="email" placeholder="Enter Your Email Id" />
            <FormField name="mobileNumber" label="Mobile Number" placeholder="Enter Your Mobile Number*" />
            <FormField name="subject" label="Subject" placeholder="Enter the Subject*" />
            <FormField name="message" label="Message (Optional)" as="textarea" placeholder="Your Message" style={{height:"200px",padding:"10px"}}/>

            <button
              type="submit"
              className="btn-common border-0 px-5 py-2 fw-bold rounded-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactUsForm;

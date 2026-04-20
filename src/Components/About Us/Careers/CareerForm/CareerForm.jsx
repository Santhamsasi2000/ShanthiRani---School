import React, { lazy, Suspense, useCallback } from "react";
import { Formik, Form } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import FormField from "./FormField";
import StandardDropdown from "./StandardDropdown";
import RadioButton from "./RadioButton";
import { ACCESS_KEY, API_URL } from "./config";
import { showAlert } from "./utils";
const Swal = lazy(() => import("sweetalert2"));

const CareerForm = () => {
  const onSubmit = useCallback(async (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    formData.append("access_key", ACCESS_KEY);

    // **Set a Custom Subject**
    formData.append("subject", `New Career Application from ${values.fullName}`);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        showAlert(
          "MESSAGE SENT!",
          "Thanks for contacting us. You will receive a response within two days. If you do not receive a response from us, please call '6382174912'.",
          "success"
        );
        resetForm();
      } else {
        throw new Error(data.message);
      }
    } 
    catch (error) 
    {
      showAlert("Error", error.message || "Network error. Please try again.", "error");
    } 
    finally 
    {
      setSubmitting(false);
    }
  }, []);

  const subjectOptions = [
    "Tamil", "English", "Mathematics", "Physics", "Chemistry", 
    "Computer Science", "Female PET"
  ];

  return (
    <section className="d-flex">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          mobileNumber: "",
          address: "",
          degree: "",
          specialization: "",
          bedDegree: "",
          yearsOfExperience: "",
          previousSchool: "",
          subjectTaught: "",
          postionAppliedFor: "",
          resumeLink: "",
          message: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-100">
            {/* Personal Information */}
            <h3 className="fw-bold fs-6 mb-3">Personal Information:</h3>
            <FormField name="fullName" label="Full Name" placeholder="Enter Full Name*" />
            <FormField name="email" label="Email Address (Optional)" type="email" placeholder="Enter Your Email Id" />
            <FormField name="mobileNumber" label="Mobile Number" placeholder="Enter Your Mobile Number*" />
            <FormField name="address" label="Address" placeholder="Enter Your Address*" />
            {/* Educational Qualifications */}
            <h3 className="fw-bold fs-6 mb-3">Educational Qualifications:</h3>
            <FormField name="degree" label="Highest Degree" placeholder="B.Sc" />
            <FormField name="specialization" label="Specialization " placeholder="English" />
            <RadioButton name="bedDegree" label="B.Ed. Degree" 
            options= {[
               { value: "Yes", label: "YES" },
               { value: "No", label: "NO" },
            ]}/>
           {/* Teaching Experience */}
           <h3 className="fw-bold fs-6 mb-3">Teaching Experience:</h3>
           <FormField name="yearsOfExperience" label="Years of Experience (Optional)" placeholder="2" />
           <FormField name="previousSchool" label="Previous School/Institution (Optional)" placeholder="Don Bosco School, Pallithammam" />
           <FormField name="subjectTaught" label="Subjects Taught (Optional)" placeholder="Tamil" />
           <StandardDropdown options={subjectOptions} name="postionAppliedFor" />
          {/* Resume Upload */}
          <h3 className="fw-bold fs-6 mb-3">Resume Link (Optional):</h3>
          <FormField name="resumeLink" label="Upload the Resume in Google Drive and Paste the Link" placeholder="https://drive.google.com/drive/folders/1pQx348hZsNreWoh3Nziem2yfnLGNnJQa" />
          <FormField name="message" label="Message (Optional)" as="textarea" placeholder="Your Message" style={{height:"200px",padding:"10px"}}/>

            <button
              type="submit"
              className="common-btn"
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

export default CareerForm;

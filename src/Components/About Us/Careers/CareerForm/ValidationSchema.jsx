import * as Yup from "yup";

export const ValidationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .required("Full Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .nullable(), // Optional field

  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Please provide a valid 10-digit mobile number.")
    .required("Mobile number is required"),

  address: Yup.string()
    .min(3, "Address must be at least 3 characters long")
    .required("Address is required"),

  degree: Yup.string().required("Degree is required"),

  specialization: Yup.string()
    .min(3, "Specialization must be at least 3 characters long")
    .required("Specialization is required"),

  bedDegree: Yup.string()
    .oneOf(["Yes", "No"], "Please select either 'Yes' or 'No'")
    .required("B.Ed. Degree selection is required"),

    yearsOfExperience: Yup.string()
    .matches(/^[0-9]+$/, "Experience must be a number")
    .nullable(), // Optional field

  previousSchool: Yup.string().nullable(), // Optional field

  subjectTaught: Yup.string().nullable(), // Optional field

  postionAppliedFor: Yup.string().required("Position applied for is required"),

  resumeLink: Yup.string().nullable(),

  message: Yup.string()
    .max(500, "Message cannot exceed 500 characters")
    .nullable(), // Optional field
});

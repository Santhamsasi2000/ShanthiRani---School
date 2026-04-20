import React from "react";
import { Field, ErrorMessage } from "formik";

const FormField = ({ label, name, type = "text", as = "input", ...props }) => (
  <div className="input-box mb-4">
    <label className="fw-bold" htmlFor={name}>
      {label}
    </label>
    <Field
      id={name}
      name={name}
      type={type}
      className={`field mt-2 rounded border border-1 ps-3 ${type === "textarea" ? "pt-3" : ""}`}
      as={as}
      {...props}
    />
    <ErrorMessage name={name} component="div" className="text-danger mt-1" />
  </div>
);

export default FormField;

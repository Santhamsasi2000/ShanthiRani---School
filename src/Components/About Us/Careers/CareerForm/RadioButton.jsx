import { ErrorMessage, Field } from "formik"

const RadioButton = ({ name, label, options}) => {
  return (
    <div className="mb-4">
       <label className="mb-2">{label}</label>
       <div>
         {
            options.map(({value, label}) =>(
            <label key={value} className="me-3">
                <Field type="radio" name={name} value={value} className="me-1"/>
                {label}
            </label>
            ))
         }
       </div>
       <ErrorMessage name={name} component="div" className="text-danger mt-1" />
    </div>
  )
}

export default RadioButton

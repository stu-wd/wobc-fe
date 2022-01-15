import React from "react";
import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";

import fd, { sizes } from "./Options/formData";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      <input className="text-input" {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyRadio = ({ children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div name="group" role="group">
      {/* {children.map((choice, i) => {
        return (
          <>
            {choice}
            <input value={choice} {...field} {...props} />
          </>
        );
      })} */}
      {/* {children.map((c) => {
        return <h1>{c}</h1>;
      })} */}
      {children.map((choice, i) => {
        return (
          <>
            <label>
              <Field type="radio" name={props.name} value={choice} />
              {choice}
            </label>
          </>
        );
      })}

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>

      <select {...field} {...props}>
        {children.map((choice, i) => {
          return (
            <option key={i} value={choice}>
              {choice}
            </option>
          );
        })}
      </select>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these

const BikeForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          serial: "",
          status: "",
          brand: "",
          condition: "",
          type: "",
          gender: "",
          adultchild: "",
          size: "",
          received: "",
          storage: "",
          picked: "",
        }}
        validationSchema={Yup.object({
          serial: Yup.string().required("Required"),
          // status: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, onChange }) => (
          <Form>
            {fd.options.map((option, i) => {
              if (option.type === "text") {
                return (
                  <MyTextInput
                    type={option.type}
                    key={i}
                    label={option.name}
                    name={option.name}
                  />
                );
              }
              if (option.type === "select") {
                return (
                  <MySelect
                    children={option.choices}
                    label={option.name}
                    type={option.type}
                    key={i}
                    name={option.name}
                  />
                );
              }
              if (option.type === "radio") {
                return (
                  <MyRadio
                    children={option.choices}
                    // label={option.name}
                    // type={option.type}
                    // key={i}
                    name={option.name}
                  />
                );
              }
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BikeForm;

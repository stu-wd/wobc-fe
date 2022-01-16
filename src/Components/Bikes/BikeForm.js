import React from "react";
import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";
import { Autocomplete } from "formik-mui";
import MuiTextField from "@mui/material/TextField";
import fd from "./Options/formData";
import { useBikes } from "../../Contexts/bikes.context";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <input placeholder={props.name} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyRadio = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div role="group">
      {children.map((choice, i) => {
        return (
          <>
            <label>
              <Field type="radio" key={i} name={props.name} value={choice} />
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
      <select {...field} {...props}>
        <option disabled value="">
          {props.name}
        </option>
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

const MySearchable = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Field
      name={props.name}
      component={Autocomplete}
      options={children}
      // getOptionLabel={() => }
      // style={{ width: 300 }}
      renderInput={(props) => (
        <MuiTextField
          {...props}
          name={props.name}
          label={props.name}
          variant="outlined"
        />
      )}
    />
  );
};

const BikeForm = () => {
  const { postBike } = useBikes();
  return (
    <div className="mt-4">
      <Formik
        initialValues={{
          serial: "",
          status: "",
          brand: "",
          style: "",
          gender: "",
          adultchild: "",
          size: "",
          received: "",
          storage: "",
        }}
        validationSchema={Yup.object({
          serial: Yup.string().required("Required"),
          status: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          values.serial = values.serial.toUpperCase();
          postBike(values);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        <Form className="flex flex-col">
          {fd.options.map((option, i) => {
            if (option.type === "text") {
              return (
                <MyTextInput type={option.type} key={i} name={option.name} />
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
                <MyRadio key={i} children={option.choices} name={option.name} />
              );
            }
            if (option.type === "search") {
              return (
                <MySearchable
                  key={i}
                  name={option.name}
                  children={option.choices}
                />
              );
            }
          })}

          <button className="button" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BikeForm;

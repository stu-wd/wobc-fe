import React from "react";
import fd from "../form/data/formData";
import {
  MyRadio,
  MySearchable,
  MySelect,
  MyTextField,
} from "../form/formInputs";
import { Formik, Form } from "formik";

const MyBikeForm = ({ buttonText, startingValues, validate, onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{ ...startingValues }}
        // validationSchema={validate}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            {fd.options.map((o, i) => {
              if (o.type === "text") {
                return <MyTextField name={o.name} key={i} />;
              }

              if (o.type === "select") {
                return <MySelect name={o.name} key={i} children={o.choices} />;
              }

              if (o.type === "radio") {
                return <MyRadio name={o.name} key={i} children={o.choices} />;
              }

              if (o.type === "search") {
                return (
                  <MySearchable
                    children={o.choices}
                    name={o.name}
                    key={i}
                    setFieldValue={setFieldValue}
                  />
                );
              }
            })}
            <button className="button mt-2" type="submit">
              {buttonText}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MyBikeForm;

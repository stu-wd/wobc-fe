import React, { useEffect } from "react";
import fd from "../form/data/formData";
import { Button } from "@mui/material";
import {
  MyRadio,
  MySearchable,
  MySelect,
  MyTextField,
} from "../form/formInputs";
import { Formik, Form } from "formik";
import { useBikes } from "../../state/bikesContext";

const MyBikeForm = ({ buttonText, startingValues, validate, onSubmit }) => {
  const { formOptionsRefreshed } = useBikes();

  const updatedOptions = formOptionsRefreshed.value;

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
                return (
                  <MySelect
                    name={o.name}
                    key={i}
                    children={updatedOptions[o.name]}
                  />
                );
              }

              if (o.type === "radio") {
                return <MyRadio name={o.name} key={i} children={o.choices} />;
              }

              if (o.type === "search") {
                return (
                  <MySearchable
                    children={
                      o.name === "brand" ? o.choices : updatedOptions[o.name]
                    }
                    name={o.name}
                    key={i}
                    size="small"
                    setFieldValue={setFieldValue}
                  />
                );
              }
            })}
            <Button variant="contained" fullWidth type="submit">
              {buttonText}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MyBikeForm;

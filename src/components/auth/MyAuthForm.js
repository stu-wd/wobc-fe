import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { MyTextField } from "../form/formInputs";

const MyAuthForm = ({
  buttonText,
  helperText,
  content,
  onSubmit,
  validate,
  changeAction,
  userReinforcementMsg,
}) => {
  return (
    <>
      <div>
        {userReinforcementMsg ? userReinforcementMsg : null}
        <div className={`mt-2 text-center text-sm text-gray-600 max-w m-0`}>
          {helperText.question}
        </div>
        <p
          onClick={changeAction}
          className={`text-center font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer`}
        >
          {helperText.action}
        </p>
      </div>
      <Formik
        initialValues={{}}
        // validate={validate}
        onSubmit={onSubmit}
      >
        <Form>
          {content}
          <Button variant="contained" type="submit">
            {buttonText}
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default MyAuthForm;

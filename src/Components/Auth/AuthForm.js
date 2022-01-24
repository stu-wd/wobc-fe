import React, { useState } from "react";
import { Box, Checkbox, FormControlLabel, Button } from "@mui/material";
import WOBCLogo from "../../Images/wobclogotransparent.png";
import { useAuth } from "../../Contexts/authContext";
import { Circles } from "react-loading-icons";
import { MyTextField } from "../Authed/Form/formInputs";

const AuthForm = () => {
  const { login, loginAttempt, register, registrationAttempt } = useAuth();
  const [showRegister, setShowRegister] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);

    if (showRegister) {
      if (values.get("password") != values.get("confirmPassword")) {
        alert("Passwords do not match");
      } else {
        const formSubmit = {
          name: values.get("name"),
          username: values.get("username"),
          password: values.get("password"),
        };
        register(formSubmit);
      }
    }

    if (!showRegister) {
      const formSubmit = {
        username: values.get("username"),
        password: values.get("password"),
        remember: checked,
      };
      login(formSubmit);
    }
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const setAction = () => {
    setShowRegister(!showRegister);
    registrationAttempt.value = null;
  };

  return (
    <Box className="flex flex-col items-center mt-8">
      <img className="mx-auto h-40 w-auto" src={WOBCLogo} alt="WOBC Logo" />
      {registrationAttempt.value != undefined &&
        registrationAttempt.value.message}

      {loginAttempt.value != undefined && loginAttempt.value.message}

      {loginAttempt.loading === false &&
      registrationAttempt.loading === false ? (
        <>
          <div className={`mt-2 text-center text-sm text-gray-600 max-w m-0`}>
            {showRegister &&
              registrationAttempt.value === null &&
              "Already registered?"}
            {!showRegister && "Not registered?"}
          </div>
          <p
            onClick={setAction}
            className={`text-center font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer`}
          >
            {showRegister && "Sign in"}
            {!showRegister && "Sign up"}
          </p>
        </>
      ) : (
        <>
          <Circles width="2rem" fill="blue" speed={0.5} />
        </>
      )}
      <Box component="form" onSubmit={handleSubmit}>
        {showRegister && <MyTextField name="name" />}
        <MyTextField name="username" />
        <MyTextField name="password" />
        {showRegister && <MyTextField name="confirmPassword" />}
        {!showRegister && (
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                onChange={handleCheck}
              />
            }
            label="Remember me"
          />
        )}
        <Button type="submit" fullWidth variant="contained">
          {showRegister ? "Register" : "Login"}
        </Button>
      </Box>
    </Box>
  );
};

export default AuthForm;

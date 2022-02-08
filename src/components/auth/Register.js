import React, { useState } from "react";
import { useAuth } from "../../state/authContext";
import MyAuthForm from "./MyAuthForm";
import { MyTextField, MyPassword } from "../form/formInputs";
import { Box } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const { register, setAuthAction, registrationAttempt } = useAuth();
  const registerSubmit = (values, actions) => {
    const { name, username } = values;
    if (passwords.password != passwords.confirmPassword) {
      alert("Passwords do not match");
    } else {
      register({
        name: name,
        username: username,
        password: passwords.password,
      }).then((res) => {});
    }
  };
  const validate = () => {};

  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setPasswords({ ...passwords, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPasswords({
      ...passwords,
      showPassword: !passwords.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log(registrationAttempt);
  const list = (
    <Box>
      <MyTextField name="name" />
      <MyTextField name="username" />
      <MyPassword
        name="password"
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        label="Password"
        showPassword={passwords.showPassword}
        onChange={handleChange("password")}
      />
      <MyPassword
        name="confirmPassword"
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        label="Confirm Password"
        showPassword={passwords.showPassword}
        onChange={handleChange("confirmPassword")}
      />
    </Box>
  );

  return (
    <>
      <MyAuthForm
        buttonText={"Register"}
        content={list}
        helperText={{
          question: "Already a member?",
          action: "Sign in",
        }}
        userReinforcementMsg={
          registrationAttempt.value != undefined
            ? registrationAttempt.value.message
            : null
        }
        changeAction={() => setAuthAction("login")}
        onSubmit={registerSubmit}
        validate={validate}
      />
    </>
  );
};

export default Register;

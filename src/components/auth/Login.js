import React, { useState } from "react";
import MyAuthForm from "./MyAuthForm";
import { useAuth } from "../../state/authContext";
import { Box } from "@mui/system";
import { MyPassword, MyTextField } from "../form/formInputs";
import { Checkbox, FormControlLabel } from "@mui/material";
import Circles from "react-loading-icons/dist/components/circles";

const Login = () => {
  const { login, loginAttempt, setAuthAction } = useAuth();
  const [checked, setChecked] = useState(false);
  const [passwords, setPasswords] = useState({
    password: "",
    showPassword: false,
  });

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleChange = (prop) => (event) => {
    console.log(passwords);
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

  const validate = () => {};

  const loginSubmit = (values, actions) => {
    console.log(values);
    login({ ...values, password: passwords.password, remember: checked });
  };

  const list = (
    <Box>
      <MyTextField name="username" />
      <MyPassword
        name="password"
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        label="Password"
        showPassword={passwords.showPassword}
        onChange={handleChange("password")}
      />
      <FormControlLabel
        control={
          <Checkbox value="remember" color="primary" onChange={handleCheck} />
        }
        label="Remember me"
      />
    </Box>
  );

  return (
    <>
      <MyAuthForm
        buttonText="Login"
        content={list}
        helperText={{
          question: "Not registered?",
          action: "Create account",
        }}
        userReinforcementMsg={
          loginAttempt.loading ? (
            <Circles height={"2rem"} speed={"0.5"} />
          ) : loginAttempt.value != undefined ? (
            loginAttempt.value.message
          ) : null
        }
        changeAction={() => setAuthAction("register")}
        onSubmit={loginSubmit}
        validate={validate}
      />
    </>
  );
};

export default Login;

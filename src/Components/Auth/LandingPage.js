// import React, { useState } from "react";
// import WOBCLogo from "../../Images/wobclogotransparent.png";
// import { useAuth } from "../../Contexts/auth.context";
// import { AutoComplete, Button, Checkbox, Form, Input } from "antd";

// const LandingPage = () => {
//   const [showRegister, setShowRegister] = useState("register");
//   const { register, login, setMessage, message } = useAuth();

//   const setRegister = () => {
//     setShowRegister("register");
//   };

//   const setLogin = () => {
//     setShowRegister("login");
//     setMessage("");
//   };

//   const onFinish = (values) => {
//     if (showRegister === "register") {
//       if (values.password != values.confirm_password) {
//         alert("Passwords do not match");
//       } else {
//         values = {
//           name: values.name,
//           username: values.username,
//           password: values.password,
//         };
//         register(values);
//       }
//     }
//     if (showRegister === "login") {
//       login(values);
//     }
//   };

//   const onFinishFailed = (errorInfo) => {
//     setMessage("Form error");
//   };

//   return (
//     <div className="sm:mx-auto sm:w-full sm:max-w-md">
//       {/* <h2 className="text-center text-3xl font-extrabold text-gray-900">
//         WOBC Volunteer Portal
//       </h2> */}
//       <img
//         className="mx-auto h-40 w-auto"
//         src={WOBCLogo}
//         alt="WOBC Logo"
//         // style={{}}
//       />
//       <h3 className="mt-6 text-center text-xl font-extrabold text-gray-900">
//         {showRegister === "register" && message === undefined && "Create your account"}
//         {message != undefined ? `${message}` : <></>}
//       </h3>
//       <div
//         className={`mt-2 text-center text-sm text-gray-600 max-w ${
//           showRegister === "login" ? "hidden m-0" : ""
//         }`}
//       >
//         Already registered?
//       </div>
//       <p
//         onClick={setLogin}
//         className={`text-center font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer ${
//           showRegister === "login" ? "hidden" : null
//         }`}
//       >
//         Sign in
//       </p>
//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
//           <Form
//             name="registrationAttempt"
//             onFinish={onFinish}
//             onFinishFailed={onFinishFailed}
//             className="mb-0 space-y-6"
//           >
//             <Form.Item
//               name="name"
//               className={`${showRegister === "login" ? "hidden" : ""}`}
//             >
//               <Input
//                 className="block text-sm font-medium text-gray-900"
//                 placeholder="Name"
//               />
//             </Form.Item>

//             <Form.Item
//               // label="Username"
//               name="username"
//               rules={[{ required: true }]}
//             >
//               <Input
//                 className="block text-sm font-medium text-gray-900"
//                 placeholder="Username"
//               />
//             </Form.Item>

//             <Form.Item name="password" rules={[{ required: true }]}>
//               <Input
//                 className="block text-sm font-medium text-gray-900"
//                 placeholder="Password"
//                 type="password"
//               />
//             </Form.Item>

//             <Form.Item
//               className={`${showRegister === "login" ? "hidden" : ""}`}
//               name="confirm_password"
//             >
//               <Input
//                 className="block text-sm font-medium text-gray-900"
//                 placeholder="Confirm password"
//                 type="password"
//               />
//             </Form.Item>

//             {showRegister === "login" && (
//               <Form.Item name="remember" valuePropName="checked">
//                 <Checkbox className="block text-sm font-medium text-gray-900">
//                   Remember me
//                 </Checkbox>
//               </Form.Item>
//             )}

//             <Form.Item>
//               <Button type="primary" htmlType="submit" className="button">
//                 Submit
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
} from "@mui/material";
import WOBCLogo from "../../Images/wobclogotransparent.png";
import { useAuth } from "../../Contexts/auth.context";
import { Circles } from "react-loading-icons";
import { capitalize } from "../../Utils/capitalize";

const MyTextField = ({ ...props }) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={props.name}
      label={
        props.name === "confirmPassword"
          ? capitalize("Confirm Password")
          : capitalize(props.name)
      }
      name={props.name}
      className="block text-sm font-medium text-gray-900"
      type={
        (props.name === "confirmPassword" || props.name === "password") &&
        "password"
      }
    />
  );
};

const LandingPage = () => {
  const { login, loginAttempt, register, registrationAttempt } = useAuth();
  const [showRegister, setShowRegister] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);

    if (showRegister) {
      if (values.get("password") != values.get("confirmPassword")) {
        console.log("passwords dont match");
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

  console.log(registrationAttempt);

  return (
    <Box className="flex flex-col items-center mt-8">
      <img className="mx-auto h-40 w-auto" src={WOBCLogo} alt="WOBC Logo" />
      {registrationAttempt.value != undefined &&
        registrationAttempt.value.message}

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
          <Circles width="2rem" fill="#000" speed={0.5} />
        </>
      )}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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

export default LandingPage;

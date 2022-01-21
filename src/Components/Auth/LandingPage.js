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
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WOBCLogo from "../../Images/wobclogotransparent.png";
import { useAuth } from "../../Contexts/auth.context";
import { Circles } from "react-loading-icons";

const LandingPage = () => {
  const { login, loginAttempt, register, registrationAttempt } = useAuth();
  const [showRegister, setShowRegister] = useState(false);
  const [checked, setChecked] = useState(false);
  console.log(loginAttempt);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (showRegister) {
      if (data.get("password") != data.get("confirmPassword")) {
        console.log("passwords dont match");
      } else {
        const formValues = {
          name: data.get("name"),
          username: data.get("username"),
          password: data.get("password"),
        };
        register(formValues);
      }
    }

    if (!showRegister) {
      const formValues = {
        username: data.get("username"),
        password: data.get("password"),
        remember: checked,
      };
      login(formValues);
    }
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const setAction = () => {
    setShowRegister(!showRegister);
    registrationAttempt.value = null;
  };

  // while (
  //   loginAttempt.loading === true ||
  //   registrationAttempt.loading === true
  // ) {
  //   return (
  //     <div className="flex items-center justify-center absolute top-0 left-1/2">
  //       <Circles width={"2rem"} fill="#000" />;
  //     </div>
  //   );
  // }

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
              registrationAttempt.value === undefined &&
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
        {showRegister && (
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
          />
        )}
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        {showRegister && (
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
          />
        )}
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

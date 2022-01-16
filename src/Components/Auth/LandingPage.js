import React, { useState } from "react";
import WOBCLogo from "../../Images/wobclogotransparent.png";
import { useAuth } from "../../Contexts/auth.context";
import { AutoComplete, Button, Checkbox, Form, Input } from "antd";

const LandingPage = () => {
  const [side, setSide] = useState("register");
  const { register, login, setMessage, message } = useAuth();

  const setRegister = () => {
    setSide("register");
  };

  const setLogin = () => {
    setSide("login");
    setMessage("");
  };

  const onFinish = (values) => {
    if (side === "register") {
      if (values.password != values.confirm_password) {
        alert("Passwords do not match");
      } else {
        values = {
          name: values.name,
          username: values.username,
          password: values.password,
        };
        register(values);
      }
    }
    if (side === "login") {
      login(values);
    }
  };

  const onFinishFailed = (errorInfo) => {
    setMessage("Form error");
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      {/* <h2 className="text-center text-3xl font-extrabold text-gray-900">
        WOBC Volunteer Portal
      </h2> */}
      <img
        className="mx-auto h-40 w-auto"
        src={WOBCLogo}
        alt="WOBC Logo"
        // style={{}}
      />
      <h3 className="mt-6 text-center text-xl font-extrabold text-gray-900">
        {side === "register" && message === undefined && "Create your account"}
        {message != undefined ? `${message}` : <></>}
      </h3>
      <div
        className={`mt-2 text-center text-sm text-gray-600 max-w ${
          side === "login" ? "hidden m-0" : ""
        }`}
      >
        Already registered?
      </div>
      <p
        onClick={setLogin}
        className={`text-center font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer ${
          side === "login" ? "hidden" : null
        }`}
      >
        Sign in
      </p>
      {/* <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Whoops...
          <div
            onClick={setRegister}
            className={`inline font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer`}
          >
            Make new account instead
          </div>
        </p> */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <Form
            name="registration"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="mb-0 space-y-6"
          >
            <Form.Item
              name="name"
              className={`${side === "login" ? "hidden" : ""}`}
            >
              <Input
                className="block text-sm font-medium text-gray-900"
                placeholder="Name"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input
                className="block text-sm font-medium text-gray-900"
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true }]}>
              <Input
                className="block text-sm font-medium text-gray-900"
                placeholder="Password"
                type="password"
              />
            </Form.Item>

            <Form.Item
              className={`${side === "login" ? "hidden" : ""}`}
              name="confirm_password"
            >
              <Input
                className="block text-sm font-medium text-gray-900"
                placeholder="Confirm password"
                type="password"
              />
            </Form.Item>

            {side === "login" && (
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox className="block text-sm font-medium text-gray-900">
                  Remember me
                </Checkbox>
              </Form.Item>
            )}

            <Form.Item>
              <Button type="primary" htmlType="submit" className="button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

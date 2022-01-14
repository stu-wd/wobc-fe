import React, { useEffect, useState } from "react";
import { AutoComplete, Button, Checkbox, Form, Input } from "antd";
import { useAuth } from "../../Contexts/auth.context";
import { Link, useNavigate } from "react-router-dom";
import {
  UserOutlined as UserIcon,
  LockOutlined as LockIcon,
} from "@ant-design/icons";

const UserForm = (props) => {
  const { login, register, message, setMessage } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setMessage();
  }, [props.authPage]);

  useEffect(() => {
    if (message === "Login Success") {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
    }
  }, [message]);

  const onFinish = (values) => {
    if (props.authPage === "register") {
      register(values);
    }

    if (props.authPage === "login") {
      login(values);
    }
  };

  const onFinishFailed = (errorInfo) => {
    setMessage("Form error");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {message === "Login Success" ? <> {message} ... </> : <> {message} </>}
      <Form
        name="registration"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // className='login-form'
        // layout='inline'
        style={
          {
            // width: '80vw',
            // height: '60vh',
            // border: '3px solid black',
            // backgroundColor: 'yellow'
            // display: 'flex',
            // justifyItems: 'start'
          }
        }
      >
        {/* <div
                id='input-group'
                style={{
                    transition: '0.5s'
                }}
                >
            </div> */}

        {props.authPage === "register" ? (
          <Form.Item
            name="name"
            // rules={[{ required: true }]}
            style={{
              width: "90%",
              padding: "2%",
              margin: "1% 0",
              // borderLeft: 0,
              // borderRight: 0,
              // borderTop: 0,
              // borderBottom: '1px solid #999',
              outline: "none",
              background: "transparent",
              display: "inline",
            }}
          >
            <Input placeholder="Name" />
          </Form.Item>
        ) : (
          <></>
        )}

        <Form.Item
          // label="Username"
          name="username"
          rules={[{ required: true }]}
          style={{
            width: "90%",
            padding: "2%",
            margin: "1% 0",
            // borderLeft: 0,
            // borderRight: 0,
            // borderTop: 0,
            // borderBottom: '1px solid #999',
            outline: "none",
            background: "transparent",
            display: "inline",
          }}
        >
          <Input
            // prefix={<UserIcon />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true }]}
          style={{
            width: "90%",
            padding: "2%",
            margin: "1% 0",
            // borderLeft: 0,
            // borderRight: 0,
            // borderTop: 0,
            // borderBottom: '1px solid #999',
            outline: "none",
            background: "transparent",
            display: "inline",
          }}
        >
          <Input.Password
            style={{
              // border: '3px solid black',
              display: "flex",
            }}
            // prefix={
            // <LockIcon
            //     className="site-form-item-icon"
            // />}
            placeholder="Password"
          />
        </Form.Item>

        {props.authPage === "register" ? (
          <Form.Item
            name="confirm_password"
            // rules={[{ required: true }]}
            style={{
              width: "90%",
              padding: "2%",
              margin: "1% 0",
              // borderLeft: 0,
              // borderRight: 0,
              // borderTop: 0,
              // // borderBottom: '1px solid #999',
              // outline: 'none',
              background: "transparent",
              display: "inline",
            }}
          >
            <Input.Password
              style={
                {
                  // border: '3px solid black',
                }
              }
              // prefix={
              //     <LockIcon
              //         style={{
              //             // border: '3px solid red',
              //             // margin: '3px',
              //             // display: 'flex'
              //         }}
              //         className="site-form-item-icon"
              //     />}
              placeholder="Not hooked up yet"
            />
          </Form.Item>
        ) : (
          <></>
        )}

        {props.authPage === "login" ? (
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        ) : (
          <></>
        )}

        <Form.Item
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
<Button
type="primary"
htmlType="submit"
style={{
width: "200px",
display: "block",
margin: "auto",
background:
"linear-gradient(360deg, rgba(194,221,173,1) 0%, rgba(144,190,109,1) 83%)",
border: 0,
outline: "none",
borderRadius: "30px",
}}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;

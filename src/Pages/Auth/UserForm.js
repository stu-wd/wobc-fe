import React, { useState } from 'react';
import { AutoComplete, Button, Checkbox, Form, Input } from 'antd'
import { useAuth } from '../../Contexts/auth.context';
import { Link, useNavigate } from 'react-router-dom';


const UserForm = (props) => {
    const { login, register } = useAuth();
    const navigate = useNavigate();
    console.log(props);

    const onFinish = (values) => {
        if (props.authPage === 'register') {
            register(values)
            navigate('/login')
        }

        if (props.authPage === 'login') {
            login(values)
            navigate('/dashboard')
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Form
            name='registration'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{
                // width: '80vw',
                // height: '60vh',
                // border: '3px solid black',
                // backgroundColor: 'yellow'
                // display: 'flex',
                // justifyItems: 'start'
            }}
            >
            
            {/* <div
                id='input-group'
                style={{
                    transition: '0.5s'
                }}
                >
            </div> */}


            { props.authPage === 'register' ? 
                <Form.Item
                name="name"
                // rules={[{ required: true }]}
                style={{
                    width: '90%',
                    padding: '10px 0',
                    margin: '5px 0',
                    borderLeft: 0,
                    borderRight: 0,
                    borderTop: 0,
                    borderBottom: '1px solid #999',
                    outline: 'none',
                    background: 'transparent'
                }}
                >
                    <Input
                        placeholder='Name'
                    />
                </Form.Item>
                :
                <></>
            }
            

            <Form.Item
                // label="Username"
                name="username"
                rules={[{ required: true }]}
                style={{
                    width: '90%',
                    padding: '10px 0',
                    margin: '5px 0',
                    borderLeft: 0,
                    borderRight: 0,
                    borderTop: 0,
                    borderBottom: '1px solid #999',
                    outline: 'none',
                    background: 'transparent'
                }}
                >
                <Input
                placeholder='Username'
                />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true }]}
                style={{
                    width: '90%',
                    padding: '10px 0',
                    margin: '5px 0',
                    borderLeft: 0,
                    borderRight: 0,
                    borderTop: 0,
                    borderBottom: '1px solid #999',
                    outline: 'none',
                    background: 'transparent'
                }}
                >
                <Input.Password
                    placeholder='Password'
                />
            </Form.Item>


        { props.authPage === 'register' ? 
            <Form.Item
                name="password"
                rules={[{ required: true }]}
                style={{
                    width: '90%',
                    padding: '10px 0',
                    margin: '5px 0',
                    borderLeft: 0,
                    borderRight: 0,
                    borderTop: 0,
                    borderBottom: '1px solid #999',
                    outline: 'none',
                    background: 'transparent'
                }}
                >
                <Input.Password
                    placeholder='Confirm Password'
                />
            </Form.Item>
              :
              <></>
          }

            <Form.Item
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                        width: '200px',
                        display: 'block',
                        margin: 'auto',
                        background: 'linear-gradient(to right, #ff105f, #ffad06)',
                        border: 0,
                        outline: 'none',
                        borderRadius: '30px'
                    }}
                    >
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );
};

export default UserForm;
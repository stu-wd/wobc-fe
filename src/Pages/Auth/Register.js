import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/auth.context';
import { Button, Checkbox, Form, Input } from 'antd'

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();

    const onFinish = (values) => {
        register(values)
        navigate('/login')
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

       {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}
    
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

    </Form>
    );
};

export default Register;
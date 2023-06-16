import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import validator from 'validator'

const Mainpage =()=>{

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const [errorMessage, setErrorMessage] = useState('')
 
      const validate = (value) => {
     
        if (validator.isStrongPassword(value, {
          minLength: 6, minLowercase: 1,maxLength: 20,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        }) && value.length <=20) {
          setErrorMessage('Is Strong Password')
        } else {
          setErrorMessage('Is Not Strong Password')
        }
      }

      
    return (
        <div>
             <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
      marginTop:"15%",
      marginLeft:"24%"
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
   <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
          message: 'Please enter a valid mailid!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
          whitespace:true

        },
      ]}
    >
      <Input.Password  onChange={(e) => validate(e.target.value)}></Input.Password>
         {errorMessage === '' ? null :
          <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>}
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
        </div>
    )
}
export default Mainpage;
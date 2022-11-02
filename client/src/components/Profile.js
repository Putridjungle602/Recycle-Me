import React, { Component } from "react";

export default function Profile() {
  const onFinish = (e) => {
    console.log(e);
  };

  return (
    <div className="profileContainer">
      <div className="profileContainerWrap">
        <Form onFinish={onFinish}>
          <Form.Item label="First Name" name="firstName" required>
            <Input
              placeholder="First Name"
              maxlength={15}
              minlength={1}
              type="firstName"
              allowClear
            ></Input>
          </Form.Item>
          <Form.Item label="Last Name" name="lastName" required>
            <Input
              placeholder="Last Name"
              maxlength={15}
              minlength={1}
              type="lastName"
              allowClear
            ></Input>
          </Form.Item>
          <Form.Item label="Email" name="email" required>
            <Input
              placeholder="Email"
              maxlength={15}
              minlength={6}
              type="email"
              allowClear
            ></Input>
          </Form.Item>
          <Form.Item label="Password" name="password" required>
            <Input
              placeholder="Password"
              maxlength={15}
              minlength={6}
              type="password"
              allowClear
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

import { auth } from "@/firebase/firebase.auth";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "./SocialLogin";

const Register = () => {
  // const router = useRouter();

  // const [createUserWithEmailAndPassword, user, loading, error] =
  //   useCreateUserWithEmailAndPassword(auth);
  // const onFinish = (values) => {
  //   // console.log("Received values of form: ", values);
  //   createUserWithEmailAndPassword(values.email, values.password)
  // };
  // useEffect(() => {
  //   if (user) {
  //     router.push('/');
  //   }
  // }, [user, router]);
  return (
      // <Form
      //   name="register-form"
      //   layout="vertical"
      //   onFinish={onFinish}
      //   // labelCol={{ span: 8 }}
      //   // wrapperCol={{ span: 16 }}
      //   initialValues={{ remember: true }}
      // >
      //   <Form.Item
      //     label="Full Name"
      //     name="fullname"
      //     rules={[{ required: true, message: "Please input your full name!" }]}
      //   >
      //     <Input />
      //   </Form.Item>

      //   <Form.Item
      //     label="Email"
      //     name="email"
      //     rules={[
      //       { required: true, message: "Please input your email address!" },
      //       { type: "email", message: "Please enter a valid email address!" },
      //     ]}
      //   >
      //     <Input />
      //   </Form.Item>

      //   <Form.Item
      //     label="Password"
      //     name="password"
      //     rules={[{ required: true, message: "Please input your password!" }]}
      //   >
      //     <Input.Password />
      //   </Form.Item>

      //   <Form.Item
      //     label="Confirm Password"
      //     name="confirmPassword"
      //     dependencies={["password"]}
      //     rules={[
      //       { required: true, message: "Please confirm your password!" },
      //       ({ getFieldValue }) => ({
      //         validator(_, value) {
      //           if (!value || getFieldValue("password") === value) {
      //             return Promise.resolve();
      //           }
      //           return Promise.reject("The two passwords do not match!");
      //         },
      //       }),
      //     ]}
      //   >
      //     <Input.Password />
      //   </Form.Item>

      //   <Form.Item>
      //     <Button type="primary" htmlType="submit">
      //       Register
      //     </Button>
      //   </Form.Item>
      // </Form>
      <SocialLogin/>
  );
};

export default Register;

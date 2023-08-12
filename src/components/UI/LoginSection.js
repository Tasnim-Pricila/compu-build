import { auth } from "@/firebase/firebase.auth";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "./SocialLogin";

const LoginSection = () => {
  // const router = useRouter();
  // const [signInWithEmailAndPassword, user] =
  //   useSignInWithEmailAndPassword(auth);

  // const onFinish = (values) => {
  //   // console.log("Received values of form: ", values);
  //   signInWithEmailAndPassword(values.email, values.password);
  // };
  // useEffect(() => {
  //   if (user) {
  //     router.push("/");
  //   }
  // }, [user, router]);

  return (
    <>
      {/* <Form
        name="login_form"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Typography>Or login with</Typography>
        <div>
          <GoogleOutlined
            style={{ fontSize: "30px", marginRight: "10px" }}
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          />
          <GithubOutlined
            style={{ fontSize: "30px" }}
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          />
        </div>
      </div> */}
      <SocialLogin/>
    </>
  );
};

export default LoginSection;

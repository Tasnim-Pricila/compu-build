import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { signIn } from "next-auth/react";
import React from "react";

const SocialLogin = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Typography>Login with</Typography>
      <div>
        <GoogleOutlined
          style={{ fontSize: "30px", marginRight: "10px" }}
          onClick={() =>
            signIn("google", {
              callbackUrl: "https://compu-build.vercel.app/",
            })
          }
        />
        <GithubOutlined
          style={{ fontSize: "30px" }}
          onClick={() =>
            signIn("github", {
              callbackUrl: "https://compu-build.vercel.app/",
            })
          }
        />
      </div>
    </div>
  );
};

export default SocialLogin;

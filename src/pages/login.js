import MainLayout from "@/components/Layouts/MainLayout";
import LoginSection from "@/components/UI/LoginSection";
import Register from "@/components/UI/Register";
// import { auth } from "@/firebase/firebase.auth";
import { HomeOutlined, LoginOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Tabs, Typography } from "antd";
import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useEffect } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  // const router = useRouter();
  // const [user, loading, error] = useAuthState(auth);

  // useEffect(() => {
  //   if (user?.email) {
  //     router.push("/pc-builder");
  //   }
  // }, [user?.email]);
  // console.log(user);
  return (
    <div>
      <div
        style={{
          height: "20vh",
          background: "skyblue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography.Title level={4}>Login to Compu Build</Typography.Title>
        <Breadcrumb
          items={[
            {
              title: (
                <>
                  <Link href="/">
                    <HomeOutlined style={{ marginRight: "10px" }} />
                    <span>Home</span>
                  </Link>
                </>
              ),
            },
            {
              title: (
                <>
                  <LoginOutlined style={{ marginRight: "6px" }} />
                  <span>Login</span>
                </>
              ),
            },
          ]}
        />
      </div>
      <div
        className="login-background"
        style={{
          marginBottom: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: "40%",
            minHeight: "50vh",
            // background: 'red'
          }}
        >
          <Tabs defaultActiveKey="1" centered>
            <Tabs.TabPane tab="Login" key="1">
              <LoginSection />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Register" key="2">
              <Register />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

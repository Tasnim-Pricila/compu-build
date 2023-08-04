import MainLayout from "@/components/Layouts/MainLayout";
import Login from "@/components/UI/Login";
import Register from "@/components/UI/Register";
import { HomeOutlined, LoginOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Tabs, Typography } from "antd";
import Link from "next/link";
import React from "react";

const login = () => {
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
              <Login />
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

export default login;

login.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

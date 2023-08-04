import { Button, Dropdown, Layout, Menu, Space, Typography } from "antd";
import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Header from "../UI/Header";
const { Content, Footer } = Layout;

const MainLayout = ({ children }) => {
 
  
  

  return (
    <SessionProvider>
      <Layout className="layout">
        <Header/>
        <Content
          style={{
            // padding: "0 50px",
            minHeight: "100vh",
          }}
        >
          <div>{children}</div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            background: "black",
            color: "white",
          }}
        >
          Compu Build ©2023 Created by Tasnim Pricila
        </Footer>
      </Layout>
      </SessionProvider>
  );
};

export default MainLayout;

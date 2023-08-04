import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Space, Typography } from "antd";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
//   console.log(session);
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const handleMenuClick = (e) => {
    // if (e.key === '3') {
    //   setOpen(false);
    // }
  };
  const items = [
    {
      label: "CPU",
      key: "1",
    },
    {
      label: "Motherboard",
      key: "2",
    },
    {
      label: "Cooler",
      key: "3",
    },
  ];
  return (
    <SessionProvider>
      <Layout.Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
          >
            Compu Build
          </Typography>
        </div>
        <Space>
          <Dropdown
            menu={{
              items,
              onClick: handleMenuClick,
            }}
            onOpenChange={handleOpenChange}
            open={open}
          >
            <Button type="text" block>
              <Space style={{ color: "white" }}>
                Categories
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Button type="primary">PC Builder</Button>
          {session?.user?.email ? (
            <Button
              type="text"
              block
              style={{ color: "red", fontWeight: "bold" }}
              onClick={() => signOut()}
            >
              <LogoutOutlined  />
              Logout
            </Button>
          ) : (
            <Button type="text" block style={{ color: "white" }}>
              <UserOutlined />
              Login / Register
            </Button>
          )}
        </Space>
      </Layout.Header>
    </SessionProvider>
  );
};

export default Header;

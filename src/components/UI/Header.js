import { auth } from "@/firebase/firebase.auth";
import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Space, Typography } from "antd";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);

  console.log(user);
  const [logOut] = useSignOut(auth);
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
          <Link href="/">
            <Typography
              style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
            >
              Compu Build
            </Typography>
          </Link>
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
          <Link href="/pc-builder">
            <Button type="primary">PC Builder</Button>
          </Link>
          {session?.user?.email || user?.email ? (
            <Button
              type="text"
              block
              style={{ color: "red", fontWeight: "bold" }}
              onClick={session?.user?.email ? () => signOut() : () => logOut()}
            >
              <LogoutOutlined />
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button type="text" block style={{ color: "white" }}>
                <UserOutlined />
                Login / Register
              </Button>
            </Link>
          )}
        </Space>
      </Layout.Header>
    </SessionProvider>
  );
};

export default Header;

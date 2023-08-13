// import { auth } from "@/firebase/firebase.auth";
import {
  DownOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Space, Typography } from "antd";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Header.module.css";
// import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  // const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  // const [logOut] = useSignOut(auth);
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const [show, setShow] = useState(false);

  const items = [
    {
      label: <Link href="/category/Processor">Processor</Link>,
      key: "1",
    },
    {
      label: <Link href="/category/Motherboard">Motherboard</Link>,
      key: "2",
    },
    {
      label: <Link href="/category/RAM">RAM</Link>,
      key: "3",
    },
    {
      label: <Link href="/category/Power Supply Unit">Power Supply Unit</Link>,
      key: "4",
    },
    {
      label: <Link href="/category/Storage Device">Storage Device</Link>,
      key: "5",
    },
    {
      label: <Link href="/category/Monitor">Monitor</Link>,
      key: "6",
    },
    {
      label: <Link href="/category/Keyboard">Keyboard</Link>,
      key: "7",
    },
  ];
  return (
    <SessionProvider>
      <Layout.Header
        className={styles.header}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <Typography
            style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
          >
            Compu Build
          </Typography>
        </Link>

        <Menu className={styles.menuIcon} theme="dark" >
          <Menu.SubMenu
            title={
             
                <MenuFoldOutlined
                />
             
            }
          >
            <Menu.Item key="project">
              <Dropdown
                menu={{
                  items,
                }}
                onOpenChange={handleOpenChange}
                open={open}
              >
                <Button type="text" block style={{ color: "white" }}>
                  <Space >
                    Categories
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="about-us">
            <Link href="/components/allComponents">
            <Button type="text" style={{ color: "white" }}>
              Components
            </Button>
          </Link>
            </Menu.Item>
            <Menu.Item key="log-out">
            <Link href="/pc-builder">
            <Button type="primary">PC Builder</Button>
          </Link>
            </Menu.Item>
            <Menu.Item>
            {session?.user?.email ? (
            <Button
              type="text"
              block
              style={{ color: "red", fontWeight: "bold" }}
              onClick={() => signOut()}
            >
              <LogoutOutlined />
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button type="text" block style={{ color: "white" }}>
                <UserOutlined />
                <span className={styles.loginText}>Login / Register</span>
              </Button>
            </Link>
          )}
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>

        <Space className={styles.menu}>
          <Dropdown
            menu={{
              items,
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
          <Link href="/components/allComponents" >
            <Button type="text" style={{ color: "white" }}>
              Components
            </Button>
          </Link>
          <Link href="/pc-builder">
            <Button type="primary" style={{ color: "white" }}>PC Builder</Button>
          </Link>
          {session?.user?.email ? (
            <Button
              type="text"
              block
              style={{ color: "red", fontWeight: "bold" }}
              onClick={() => signOut()}
            >
              <LogoutOutlined />
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button type="text" block style={{ color: "white" }}>
                <UserOutlined />
                <span className={styles.loginText}>Login / Register</span>
              </Button>
            </Link>
          )}
        </Space>
      </Layout.Header>
    </SessionProvider>
  );
};

export default Header;

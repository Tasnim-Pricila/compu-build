import { Button, Dropdown, Layout, Menu, Space, Typography, theme } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [open, setOpen] = useState(false);

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
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography style={{ color: "white", fontWeight: "bold", fontSize: '20px' }}>
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
          <Button type="text" block style={{ color: "white" }}>
            <UserOutlined />
            Login / Register
          </Button>
        </Space>
      </Header>
      <Content
        style={{
          padding: "0 50px",
          minHeight: "100vh",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          background: 'black',
          color: 'white'
        }}
      >
        Compu Build ©2023 Created by Tasnim Pricila
      </Footer>
    </Layout>
  );
};

export default MainLayout;

import { Avatar, Button, Col, List, Row, Skeleton, Typography } from "antd";
import React from "react";
import processor from "../assets/images/processor.jpg";
import Image from "next/image";
const PCBuilder = () => {
  const data = [
    {
      title: "CPU",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{
          border: "1px solid gray",
          marginTop: "40px",
        }}
        justify="center"
        align="middle"
      >
        <Col span={2}>
          <Image src={processor} alt="processor" layout="responsive"></Image>
        </Col>
        <Col span={15}>
          <Typography.Title level={4}>CPU</Typography.Title>
          <Skeleton active paragraph={{ rows: 0 }} />
        </Col>
        <Col span={4}>
          <Skeleton active paragraph={{ rows: 0 }} />
        </Col>
        <Col span={3}>
          <Button type="primary">Choose</Button>
        </Col>
      </Row>
    </div>
  );
};

export default PCBuilder;

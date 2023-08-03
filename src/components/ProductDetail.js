import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Rate,
  Row,
  Typography,
  message,
} from "antd";
import Image from "next/image";
import processor from "@/assets/images/processor.jpg";
import { CommentOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Title } = Typography;

const ProductDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success("Submit success!");
  };
  const onFinishFailed = () => {
    message.error("Submit failed!");
  };
  
  return (
    <>
      <Row
        style={{ marginTop: "40px" }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col span={12}>
          <Image
            src={processor}
            alt="processor"
            //   width="400"
            //   height="400"
            layout="responsive"
          ></Image>
        </Col>
        <Col span={12}>
          <Title level={3}>Product Name</Title>
          <Rate allowHalf defaultValue={4.5} /> 61 Reviews
          <Typography style={{ marginTop: "10px" }}>Category</Typography>
          <Title level={5}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            repellat beatae, cupiditate accusamus ipsa impedit non ipsum sunt
            maiores veniam sed delectus eligendi error earum pariatur ex nulla
            vel! Voluptate.
          </Title>
          <Title level={4} style={{ fontWeight: "bold" }}>
            $100.00
          </Title>
          <Title level={5}>Key Features: </Title>
          <Typography style={{ marginTop: "10px" }}>Brand: MSI</Typography>
          <Typography style={{ marginTop: "10px" }}>
            Model: PRO MP242C
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Base Frequency: 3.2GHz
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Port: HDMI, D-Sub (VGA)
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Type: External Adaptor (12V 2.5A)
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Processor Graphics: 1000 MHz
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Maximum Speed: 2667MHz
          </Typography>
          <Title
            level={5}
            style={{
              background: "gray",
              padding: "10px 20px",
              display: "inline-block",
            }}
          >
            {" "}
            Stock{" "}
          </Title>
          <Title level={5}>Warranty Information: </Title>
          <Typography>3 Years (No Warranty for Fan or Cooler)</Typography>
        </Col>
      </Row>
      <Row>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // border: '1px solid ',
            width: "100%",
            marginTop: "20px",
          }}
        >
          <div>
            <Title level={4}>Reviews (0) </Title>
            <Typography>
              Get specific details about this product from customers who own it.
            </Typography>
          </div>
          <Button type="primary" onClick={showModal}>
            Write a Review
          </Button>
        </div>
        <Divider />
      </Row>
      <div
        style={{
          height: "20vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid gray",
        }}
      >
        <CommentOutlined style={{ fontSize: "26px", color: "#08c" }} />
        <Title level={5}>
          This product has no reviews yet. Be the first one to write a review.
        </Title>
      </div>
      <Modal
        title="Write Review"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
            onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="rating"
            label="Rating"
            rules={[
              {
                required: true,
              },
              {
                type: "number",
              },
            ]}
          >
            <Rate allowHalf defaultValue={0} />
          </Form.Item>
          <Form.Item
            name="review"
            label="Your review"
            rules={[
              {
                required: true,
              },
              {
                type: "string",
                min: 6,
              },
            ]}
          >
            <Input placeholder="Your review" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ProductDetail;

import { useEditComponentMutation } from "@/redux/features/components/componentApi";
import { CommentOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Divider,
  Form,
  Input,
  List,
  Modal,
  Rate,
  Row,
  Typography,
  message,
} from "antd";
import React, { useState } from "react";

const ReviewSection = ({ component, reviews }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editComponent, { error }] = useEditComponentMutation();

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

  const onFinish = (values) => {
    message.success("Submit success!");
    const data = { reviews: [...reviews, values] };
    editComponent({ id: component?._id, data });
    setIsModalOpen(false);
  };
  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Row>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <div>
            <Typography.Title level={4}>
              Reviews ({reviews.length}){" "}
            </Typography.Title>
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
      {!reviews?.length ? (
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
          <Typography.Title level={5}>
            This product has no reviews yet. Be the first one to write a review.
          </Typography.Title>
        </div>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={reviews}
          renderItem={(review) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={review?.user?.image} />}
                title={review?.reviewedBy}
                description={
                  <div>
                    <Rate disabled allowHalf defaultValue={review?.rating} />
                    <p>{review?.comment}</p>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      )}
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
            name="reviewedBy"
            label="Your Name"
            rules={[
              {
                required: true,
              },
              {
                type: "string",
              },
            ]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>
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
            name="comment"
            label="Your review"
            rules={[
              {
                required: true,
              },
              {
                type: "string",
                min: 3,
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
    </div>
  );
};

export default ReviewSection;

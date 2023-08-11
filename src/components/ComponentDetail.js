import { Col, Rate, Row, Typography } from "antd";
import Image from "next/image";
import ReviewSection from "./ReviewSection";
const { Title } = Typography;

const ComponentDetail = ({ component }) => {
  return (
    <div style={{ width: "100%", padding: "0 20px" }}>
      <Row
        style={{ marginTop: "40px", width: "100%" }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col xs={24} md={12} lg={8}>
          <Image
            width="200"
            height="350"
            src={component?.image}
            alt="processor"
            layout="responsive"
          ></Image>
        </Col>
        <Col xs={24} md={12} lg={16}>
          <Title level={3}>{component?.name}</Title>
          <Rate allowHalf defaultValue={4.5} /> 61 Reviews
          <Typography style={{ marginTop: "10px" }}>
            {component?.category}
          </Typography>
          <Title level={5}>{component?.description}</Title>
          <Title level={4} style={{ fontWeight: "bold" }}>
            {component?.price} /-
          </Title>
          <Title level={5}>Key Features: </Title>
          <Typography style={{ marginTop: "10px" }}>
            Brand: {component?.keyFeatures?.brand}
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Model: {component?.keyFeatures?.model}
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            {component?.keyFeatures?.specification}
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Cache: {component?.keyFeatures?.cache}
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Clock Speed: {component?.keyFeatures?.clockSpeed}
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Power: {component?.keyFeatures?.power}
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Socket: {component?.keyFeatures?.socket}
          </Typography>
          <Title
            level={5}
            style={{
              background: "gray",
              padding: "10px 20px",
              display: "inline-block",
            }}
          >
            {component?.status}
          </Title>
          <Title level={5}>Warranty Information: </Title>
          <Typography>3 Years (No Warranty for Fan or Cooler)</Typography>
        </Col>
      </Row>
      <ReviewSection reviews={component?.reviews} />
    </div>
  );
};

export default ComponentDetail;

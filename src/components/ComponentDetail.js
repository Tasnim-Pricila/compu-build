import { Col, Rate, Row, Typography } from "antd";
import Image from "next/image";
import ReviewSection from "./ReviewSection";
import { useEffect, useState } from "react";
const { Title } = Typography;

const ComponentDetail = ({ component }) => {
  const [avgRating, setAvgRating] = useState(0);
  const features = component?.keyFeatures;

  useEffect(() => {
    let sum = 0;
    component?.reviews?.forEach((review) => {
      sum = sum + review?.rating;
      setAvgRating(sum / component?.reviews?.length);
    });
  }, [component?.reviews, avgRating]);

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
          <Rate allowHalf value={avgRating} disabled />{" "}
          {component?.reviews?.length} Reviews
          <Typography style={{ marginTop: "10px" }}>
            {component?.category}
          </Typography>
          <Title level={5}>{component?.description}</Title>
          <Title level={4} style={{ fontWeight: "bold" }}>
            {component?.price} /-
          </Title>
          <Title level={5}>Key Features: </Title>
          <Typography >
            Brand: {features?.brand}
          </Typography>
          <Typography >
            Model: {features?.model}
          </Typography>
          <Typography >
            {features?.specification}
          </Typography>
          <Typography >
            {features?.type}
          </Typography>
          <Typography >
            {features?.speed}
          </Typography>
          <Typography >
            {features?.capacity}
          </Typography>
          <Typography >
            {features?.latency}
          </Typography>
          <Typography >
            {features?.cache}
          </Typography>
          <Typography >
            {features?.clockSpeed}
          </Typography>
          <Typography >
            {features?.power}
          </Typography>
          <Typography >
            {features?.socket}
          </Typography>
          <Typography >
            {features?.formFactor}
          </Typography>
          <Typography>{features?.slots}</Typography>
          <Typography>{features?.PCI}</Typography>
          <Typography>{features?.storage}</Typography>
          <Typography>{features?.networking}</Typography>
          <Typography>{features?.wattage}</Typography>
          <Typography>{features?.efficiency}</Typography>
          <Typography>{features?.modularType}</Typography>
          <Typography>{features?.fan}</Typography>
          <Typography>{features?.connector}</Typography>
          <Typography>{features?.protections}</Typography>
          <Typography>{features?.certifications}</Typography>
          <Typography>{features?.displaySize}</Typography>
          <Typography>{features?.readSpeed}</Typography>
          <Typography>{features?.writeSpeed}</Typography>
          <Typography>{features?.resolution}</Typography>
          <Typography>{features?.panelType}</Typography>
          <Typography>{features?.refreshRate}</Typography>
          <Typography>{features?.responseTime}</Typography>
          <Typography>{features?.ports}</Typography>
          <Typography>{features?.switches}</Typography>
          <Typography>{features?.backlighting}</Typography>
          <Typography>{features?.extraKeys}</Typography>
          <Typography>{features?.wristRest}</Typography>
          <Typography>{features?.connectivity}</Typography>
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
      <ReviewSection component={component} reviews={component?.reviews} />
    </div>
  );
};

export default ComponentDetail;

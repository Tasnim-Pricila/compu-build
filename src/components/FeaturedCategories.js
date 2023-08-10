import { Card, Col, Row, Space, Typography } from "antd";
import Image from "next/image";
import processor from "@/assets/images/processor.jpg";

const FeaturedCategories = ({allCategories}) => {
  
  return (
    <div>
      <Typography.Title
        style={{
          textAlign: "center",
        }}
      >
        Featured Categories
      </Typography.Title>
      <Row
        style={{ marginTop: "40px", marginBottom: "40px", padding: "0 20px" }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allCategories?.data?.slice(0, 6).map((category, i) => (
          <Col className="gutter-row" span={4} key={i}>
            <Card
              hoverable
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={processor}
                alt="processor"
                width="100"
                height="100"
              ></Image>
              <h3 style={{ textAlign: "center" }}>{category?.name}</h3>
            </Card>
          </Col>
        ))}
        
      </Row>
    </div>
  );
};

export default FeaturedCategories;

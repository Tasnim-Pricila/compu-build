import { Card, Col, Row, Space, Typography } from "antd";
import Image from "next/image";
import processor from "@/assets/images/processor.jpg";

const FeaturedCategories = () => {
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
        style={{ marginTop: "40px", marginBottom: "40px" }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={4}>
          <Card hoverable style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image src={processor} alt="processor" width='100' height='100'></Image>
            <h2 style={{textAlign: 'center'}}>CPU</h2>
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card hoverable style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image src={processor} alt="processor" width='100' height='100'></Image>
            <h2 style={{textAlign: 'center'}}>CPU</h2>
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card hoverable style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image src={processor} alt="processor" width='100' height='100'></Image>
            <h2 style={{textAlign: 'center'}}>CPU</h2>
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card hoverable style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image src={processor} alt="processor" width='100' height='100'></Image>
            <h2 style={{textAlign: 'center'}}>CPU</h2>
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card hoverable style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image src={processor} alt="processor" width='100' height='100'></Image>
            <h2 style={{textAlign: 'center'}}>CPU</h2>
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card hoverable style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image src={processor} alt="processor" width='100' height='100'></Image>
            <h2 style={{textAlign: 'center'}}>CPU</h2>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedCategories;

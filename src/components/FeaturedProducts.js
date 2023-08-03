import { Card, Col, Row, Space, Typography } from "antd";
import Image from "next/image";
const { Meta } = Card;

const FeaturedProducts = () => {
  return (
    <div>
      <Typography.Title
        style={{
          textAlign: "center",
        }}
      >
        Featured Products
      </Typography.Title>
      <Row style={{ marginTop: '40px'}}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          {" "}
          <Card
            hoverable
            cover={
              <Image
                width="250"
                height="350"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Product Name" description="Category: " />
            <p>Rating: </p>
            <p>Price: </p>
            <p>Stock: </p>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          {" "}
          <Card
            hoverable
            cover={
              <Image
                width="250"
                height="350"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Product Name" description="Category: " />
            <p>Rating: </p>
            <p>Price: </p>
            <p>Stock: </p>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          {" "}
          <Card
            hoverable
            cover={
              <Image
                width="250"
                height="350"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Product Name" description="Category: " />
            <p>Rating: </p>
            <p>Price: </p>
            <p>Stock: </p>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          {" "}
          <Card
            hoverable
            cover={
              <Image
                width="250"
                height="350"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Product Name" description="Category: " />
            <p>Rating: </p>
            <p>Price: </p>
            <p>Stock: </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedProducts;

import { Card, Col, Rate, Row, Space, Typography } from "antd";
import Image from "next/image";
const { Meta } = Card;

const FeaturedProducts = ({ allComponents }) => {
  console.log(allComponents);
  return (
    <div>
      <Typography.Title
        style={{
          textAlign: "center",
        }}
      >
        Featured Products
      </Typography.Title>
      <Row
        style={{ marginTop: "40px" }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allComponents?.data?.slice(0, 8).map((component) => (
          <Col className="gutter-row" span={6} key={component._id}>
            <Card
              hoverable
              cover={
                <Image
                  width="250"
                  height="350"
                  alt="example"
                  src={component?.image}
                />
              }
            >
              <Meta title={component?.name} description={component?.description} />
              <p><Rate allowHalf defaultValue={4.5}/></p>
              <p>{component?.price}</p>
              <p>{component?.status}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedProducts;

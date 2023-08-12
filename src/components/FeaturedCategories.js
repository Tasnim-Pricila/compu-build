import { Card, Col, Row, Space, Typography } from "antd";
import Image from "next/image";
import processor from "@/assets/images/processor.jpg";
import { useAppDispatch } from "@/redux/hook";
import { setCategory } from "@/redux/features/components/componentSlice";
import { useRouter } from "next/router";

const FeaturedCategories = ({ allCategories }) => {
  const router = useRouter();
  const handleFilter = (categoryName) => {
    router.push(`/category/${categoryName}`);
  };

  return (
    <>
      <Typography.Title
        style={{
          textAlign: "center",
        }}
      >
        Featured Categories
      </Typography.Title>
      <Row
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          padding: "0 20px",
          width: "100%",
        }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allCategories?.data?.slice(0, 6).map((category, i) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={4}
            className="gutter-row"
            span={4}
            key={i}
          >
            <Card
              hoverable
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => handleFilter(category?.name)}
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
    </>
  );
};

export default FeaturedCategories;

import { Row, Typography } from "antd";
import ComponentCard from "./UI/ComponentCard";

const FeaturedProducts = ({ allComponents }) => {
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
        style={{ marginTop: "40px", padding: "0 20px", width: "100%" }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allComponents?.data?.slice(0, 8).map((component) => (
          <ComponentCard component={component} key={component._id}/>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedProducts;

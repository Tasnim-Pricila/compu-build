import { setCategory } from "@/redux/features/components/componentSlice";
import { useAppDispatch } from "@/redux/hook";
import { Button, Col, Row, Skeleton, Typography } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const PCBuildCard = ({
  image,
  title,
  component,
  componentName,
  componentModel,
  componentPrice,
  category,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleChoose = (name) => {
    dispatch(setCategory(name));
    router.push(`/pc-builder/choose/${name}`);
  };

  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      style={{
        border: "1px solid gray",
        margin: "40px 20px",
      }}
      justify="center"
      align="middle"
    >
      <Col span={2}>
        <Image src={image} alt="processor" layout="responsive"></Image>
      </Col>
      <Col span={15}>
        <Typography.Title level={5}>{title}</Typography.Title>
        {Object.keys(component).length !== 0 ? (
          <div style={{ paddingBottom: "10px" }}>
            <Typography.Title
              level={4}
              style={{ marginTop: 0, marginBottom: "0" }}
            >
              {componentName}
            </Typography.Title>
            <Typography>{componentModel}</Typography>
          </div>
        ) : (
          <Skeleton active paragraph={{ rows: 0 }} />
        )}
      </Col>
      <Col span={4}>
        {component ? (
          <Typography.Title level={4} style={{ marginTop: 0 }}>
            {componentPrice}
          </Typography.Title>
        ) : (
          <Skeleton active paragraph={{ rows: 0 }} />
        )}
      </Col>
      <Col span={3}>
        <Button type="primary" onClick={() => handleChoose(category)}>
          Choose
        </Button>
      </Col>
    </Row>
  );
};

export default PCBuildCard;

import MainLayout from "@/components/Layouts/MainLayout";
import { Button, Col, List, Row, Skeleton, Typography } from "antd";
import processor from "../../assets/images/processor.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import { setCategory } from "@/redux/features/components/componentSlice";
import { useAppDispatch } from "@/redux/hook";

const PCBuilder = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleChoose = (name) => {
    dispatch(setCategory(name))
    router.push(`/pc-builder/${name}`)
  }
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
          margin: "40px 20px"
        }}
        justify="center"
        align="middle"
      >
        <Col span={2}>
          <Image src={processor} alt="processor" layout="responsive"></Image>
        </Col>
        <Col span={15}>
          <Typography.Title level={5}>CPU</Typography.Title>
          <Skeleton active paragraph={{ rows: 0 }} />
          {/* <div>
            <Typography.Title
              level={4}
              style={{ marginTop: 0, marginBottom: 0 }}
            >
              Product Name
            </Typography.Title>
            <Typography>Model: PRO MP242C</Typography>
          </div> */}
        </Col>
        <Col span={4}>
          <Skeleton active paragraph={{ rows: 0 }} />
          {/* <Typography.Title level={4} style={{ marginTop: 0 }}>
            10000/-
          </Typography.Title> */}
        </Col>
        <Col span={3}>
          <Button type="primary" onClick={() => handleChoose('RAM')}>Choose</Button>
        </Col>
      </Row>
  );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};



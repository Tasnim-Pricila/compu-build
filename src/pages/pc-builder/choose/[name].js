import MainLayout from "@/components/Layouts/MainLayout";
import { setProcessor } from "@/redux/features/pcBuild/pcBuildSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button, Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const Choose = ({ compo }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { category } = useAppSelector((state) => state.component);
  // let components;
  // if (category) {
    const components = compo?.data?.filter(
      (component) => component?.category === category
    );
  // } else {
  //   components = compo.data;
  // }

  const handleBuilder = (component) => {
    dispatch(setProcessor(component));
    router.push("/pc-builder");
  };
  return (
    <Row
      style={{ marginTop: "40px", padding: "0 20px", width: "100%" }}
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      {components?.length !== 0 ? (
        components?.map((component) => (
          <Col
            key={component._id}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            className="gutter-row"
            style={{ marginBottom: "20px" }}
          >
            <Card
              hoverable
              cover={
                <Image
                  width="250"
                  height="350"
                  src={component?.image}
                  layout="responsive"
                  alt="example"
                  onClick={() => router.push(`/components/${component._id}`)}
                />
              }
            >
              <Card.Meta
                title={component?.name}
                description={component?.description}
              />
              <p>{component?.category}</p>
              <Rate allowHalf defaultValue={4.5} />
              <p>{component?.price} /-</p>
              <p>{component?.status}</p>
              <Button type="primary" onClick={() => handleBuilder(component)}>
                Add to Builder
              </Button>
            </Card>
          </Col>
        ))
      ) : (
        <p>No products found</p>
      )}
    </Row>
  );
};

export default Choose;

Choose.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async (context) => {
  const components = await fetch(
    `https://compu-build-server.vercel.app/api/v1/component`
  );
  const data = await components.json();

  return {
    props: {
      compo: data,
    },
  };
};

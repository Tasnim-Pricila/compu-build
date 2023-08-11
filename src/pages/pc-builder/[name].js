import { useAppSelector } from "@/redux/hook";
import { Button, Card, Col, Rate, Row } from "antd";
import Image from "next/image";

const Choose = ({ compo }) => {
  // console.log(category);

  const { category } = useAppSelector((state) => state.component);

  let components;
  if (category) {
    components = compo?.data?.filter(
      (component) => component?.category === category
    )
    console.log(category);
  } else {
    components = compo.data;
    // console.log(category);
  }
  console.log(components);

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
        {components?.map((component) => (
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
              <Rate allowHalf defaultValue={4.5} />
              <p>{component?.price} /-</p>
              <p>{component?.status}</p>
              <Button type="primary">Add to Builder</Button>
            </Card>
          </Col>
        ))}
      </Row>
  );
};

export default Choose;

export const getServerSideProps = async (context) => {
  // const { params } = context;
  // const { name } = params;

  // const res = await fetch(
  //   `http://localhost:5000/api/v1/category/choose/${name}`
  // );
  // const data = await res.json();

  const components = await fetch(`http://localhost:5000/api/v1/component`);
  const data = await components.json();

  return {
    props: {
      // cat: data,
      compo: data,
    },
  };
};

import MainLayout from "@/components/Layouts/MainLayout";
import ComponentCard from "@/components/UI/ComponentCard";
import { useAppSelector } from "@/redux/hook";
import { Row, Typography } from "antd";
import React from "react";

const AllComponents = ({ allComponents }) => {
  const { category } = useAppSelector((state) => state.component);

  let components;
  if (category) {
    components = allComponents?.data?.filter(
      (component) => component?.category === category
    );
  } else {
    components = allComponents.data;
  }

  return (
    <>
      <Typography.Title
        style={{
          textAlign: "center",
        }}
      >
        All Components
      </Typography.Title>
      <Row
        style={{ marginTop: "40px", padding: "0 20px", width: "100%" }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 20,
        }}
      >
        {components?.map((component) => (
          <ComponentCard component={component} key={component._id} />
        ))}
      </Row>
    </>
  );
};

export default AllComponents;

AllComponents.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  const comResponse = await fetch(
    "https://compu-build-server.vercel.app/api/v1/component"
  );
  const comData = await comResponse.json();

  return {
    props: {
      allComponents: comData,
    },
  };
};

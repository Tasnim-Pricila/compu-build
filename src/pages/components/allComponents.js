import MainLayout from "@/components/Layouts/MainLayout";
import ComponentCard from "@/components/UI/ComponentCard";
import { Row, Typography } from "antd";
import React from "react";

const allComponents = ({ allComponents }) => {
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
        //   lg: 32,
        }}
      >
        {allComponents?.data?.map((component) => (
          <ComponentCard component={component} key={component._id} />
        ))}
      </Row>
    </>
  );
};

export default allComponents;
allComponents.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  const catResponse = await fetch("http://localhost:5000/api/v1/category");
  const catData = await catResponse.json();

  const comResponse = await fetch("http://localhost:5000/api/v1/component");
  const comData = await comResponse.json();

  return {
    props: {
      allCategories: catData,
      allComponents: comData,
    },
  };
};

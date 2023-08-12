import MainLayout from "@/components/Layouts/MainLayout";
import ComponentCard from "@/components/UI/ComponentCard";
import { Row } from "antd";
import React from "react";

const Category = ({ category, components }) => {
  const allComponents = components?.data?.filter(
    (component) => component?.category === category?.data?.name
  );

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
      {allComponents?.map((component) => (
        <ComponentCard component={component} key={component._id} />
      ))}
    </Row>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://compu-build-server.vercel.app/api/v1/category"
  );
  const data = await res.json();

  const paths = data?.data?.map((data) => ({
    params: { categoryName: data?.name },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://compu-build-server.vercel.app/api/v1/category/choose/${params.categoryName}`
  );
  const data = await res.json();

  const comResponse = await fetch(
    "https://compu-build-server.vercel.app/api/v1/component"
  );
  const comData = await comResponse.json();

  return {
    props: {
      category: data,
      components: comData,
    },
  };
};

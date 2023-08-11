import ComponentDetail from "@/components/ComponentDetail";
import MainLayout from "@/components/Layouts/MainLayout";

const componentDetails = ({ component }) => {
  return <ComponentDetail component={component?.data} />;
};

export default componentDetails;

componentDetails.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/api/v1/component");
  const data = await res.json();

  const paths = data?.data?.map((data) => ({
    params: { componentId: data._id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/component/${params.componentId}`
  );
  const data = await res.json();

  return {
    props: {
      component: data,
    },
  };
};

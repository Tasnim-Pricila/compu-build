import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import MainLayout from "@/components/Layouts/MainLayout";
import Banner from "@/components/UI/Banner";

const HomaPage = ({ allCategories, allComponents }) => {
  return (
    <>
      <Banner />
      <FeaturedProducts allComponents={allComponents} />
      <FeaturedCategories allCategories={allCategories} />
    </>
  );
};

export default HomaPage;

HomaPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  const catResponse = await fetch(
    "https://compu-build-server.vercel.app/api/v1/category"
  );
  const catData = await catResponse.json();

  const comResponse = await fetch(
    "https://compu-build-server.vercel.app/api/v1/component"
  );
  const comData = await comResponse.json();

  return {
    props: {
      allCategories: catData,
      allComponents: comData,
    },
  };
};

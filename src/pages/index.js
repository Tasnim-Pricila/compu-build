import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import MainLayout from "@/components/Layouts/MainLayout";
import Banner from "@/components/UI/Banner";

const HomaPage = () => {
  return (
    <div>
      <Banner/>
      <FeaturedProducts />
      <FeaturedCategories/>
    </div>
  );
};

export default HomaPage;

HomaPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

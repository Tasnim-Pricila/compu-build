import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import MainLayout from "@/components/Layouts/MainLayout";

const HomaPage = () => {
  return (
    <div>
      <FeaturedProducts />
      <FeaturedCategories/>
    </div>
  );
};

export default HomaPage;

HomaPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

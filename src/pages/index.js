import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import MainLayout from "@/components/Layouts/MainLayout";
import ProductDetail from "@/components/ProductDetail";

const HomaPage = () => {
  return (
    <div>
      <ProductDetail/>
      <FeaturedProducts />
      <FeaturedCategories/>
    </div>
  );
};

export default HomaPage;

HomaPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import MainLayout from "@/components/Layouts/MainLayout";
import PCBuilder from "@/components/PCBuilder";
import ProductDetail from "@/components/ProductDetail";

const HomaPage = () => {
  return (
    <div>
      <PCBuilder/>
      {/* <ProductDetail/>
      <FeaturedProducts />
      <FeaturedCategories/> */}
    </div>
  );
};

export default HomaPage;

HomaPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

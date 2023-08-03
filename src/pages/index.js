import MainLayout from "@/components/Layouts/MainLayout";

const HomaPage = () => {
  return <div>Homepage</div>;
};

export default HomaPage;

HomaPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

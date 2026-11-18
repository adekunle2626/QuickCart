import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import AddedToCartModal from "../components/product/AddedToCardModal";
import ScrollToTop from "../components/layout/ScrollToTop";
import NavBar from "../components/layout/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AddedToCartModal />
      <ScrollToTop />
      <NavBar />
    </>
  );
};

export default MainLayout;

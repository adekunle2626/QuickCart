import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/NavBar";
import AddedToCartModal from "../components/product/AddedToCardModal";
import ScrollToTop from "../components/layout/ScrollToTop";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AddedToCartModal />
      <ScrollToTop />
      <Navbar />
    </>
  );
};

export default MainLayout;

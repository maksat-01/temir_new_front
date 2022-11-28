import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn/SignIn";
import Interface from "./pages/interface/Interface";
import Header from "./components/header/index";
import Home from "./pages/home/home";
import ProductPage from "./pages/productPage/productPage";
import About from "./pages/about/about";
import Contact from "./components/contact/contact";
import Basket from "./pages/basket/basket";
import Media from "./components/media/Media";
import MediaCardImage from "./components/media/MediaCardImage";
import MediaCardVideos from "./components/media/MediaCardVideo";
import Company from "./components/compony/Company";
import ProductDetailPage from "./pages/productDetail/ProductDetailPage";
import Footer from "./pages/home/Footer";
import MediaAdmin from "./components/adminMedia/MediaAdmin";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import AdminProduct from "./components/adminProduct/AdminProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/productDetail/:idCard" element={<ProductDetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<AdminProduct />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/signin/:id" element={<SignIn />} />
        <Route path="/company" element={<Company />} />
        <Route path="/admin" element={<AdminProduct />} />
        <Route
          path="/image"
          element={<Media children={<MediaCardImage />} />}
        />
        <Route
          path="/video"
          element={<Media children={<MediaCardVideos />} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

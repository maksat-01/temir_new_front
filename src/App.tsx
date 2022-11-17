import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn/SignIn";
import Interface from "./pages/interface/Interface";
import Header from "./components/header/index";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Basket from "./pages/basket/basket";
import Media from "./components/media/Media";
import MediaCardImage from "./components/media/MediaCardImage";
import MediaCardVideos from "./components/media/MediaCardVideo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/signin/:id" element={<SignIn />} />
        <Route
          path="/image"
          element={<Media children={<MediaCardImage />} />}
        />
        <Route
          path="/video"
          element={<Media children={<MediaCardVideos />} />}
        />
      </Routes>
    </>
  );
}

export default App;

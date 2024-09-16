import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn/SignIn";
import Interface from "./pages/interface/Interface";
import Header from "./components/header/index";
import MediaAdminImage from "./components/adminMedia/MediaAdminImage";
import MediaAdminVideo from "./components/adminMedia/MediaAdminVideo";
import Home from "./pages/home/home";
import ProductPage from "./pages/productPage/productPage";
import About from "./pages/about/about";
import Basket from "./pages/basket/basket";
import Media from "./components/media/Media";
import Products from "./components/products/products";
import MediaCardImage from "./components/media/MediaCardImage";
import MediaCardVideos from "./components/media/MediaCardVideo";
import Company from "./components/compony/Company";
import ProductDetailPage from "./pages/productDetail/ProductDetailPage";
import Footer from "./pages/home/Footer";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import AdminProduct from "./components/adminProduct/AdminProduct";
import HeaderAdmin from "./components/ui/HeaderAdmin";
import ContactAdmin from "./components/adminContact/PhoneNumbersAdmin";
import AdminEmail from "./components/adminEmail/AdminEmail";
import AdminFollows from "./components/adminFollowMe/AdminFollow";
import AdminSocial from "./components/adminSocial/AdminSocial";
import AdminCompanyInformation from "./components/adminCompanyInformation/AdminCompanyInformation";
import AddedAdminCompany from "./components/adminCompanyInformation/AddedAdminCompany";
import MenuListAdmin from "./components/ui/HeaderListProducts";
// import Contact from "./components/contact/contact";
// import Contact from "./pages/home/Contact";
import Contact from "./components/contact/contact";
import AdminBanks from "./components/adminBanks/AdminBanks";
import HeaderLisProducts from "./components/ui/HeaderListProducts";
import MediaAdmin from "./components/adminMedia/MediaAdmin";
import ContactUs from "./pages/contactUs/contactUs";
import Share from "./components/share/Share";
import ProductsAdmin from "./pages/interface/product/ProductsAdmin";
import Profile from "./components/profile/Profile";
import ResetPassword from "./components/signIn/ResetPassword";
import AdminToWelcome from "./components/signIn/AdminToWelcome/AdminToWelcome";

function App() {
  const listContact = [
    {
      dropdown: [
        {
          name: "Contact phone",
          link: "/contact-phone",
        },
        {
          name: "E-mails",
          link: "/emailPage",
        },
        {
          name: "Follow me",
          link: "/follow",
        },
        {
          name: "Social",
          link: "/social",
        },
      ],
    },
  ];
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/productDetail/:idCard" element={<ProductDetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/image" element={<Media />} />

        <Route path="/basket" element={<Basket />} />
        <Route
          path="/user/:id"
          element={
            <Interface>
              <Contact />
            </Interface>
          }
        />
        <Route
          path="/user/:id/company"
          element={
            <Interface>
              <Company />
            </Interface>
          }
        />
        <Route path="user/:id/signin/" element={<SignIn />} />
        <Route path="welcome-to-admin/" element={<AdminToWelcome />} />

        <Route path="/resetPassword/*" element={<ResetPassword />} />

        {/* /// Product /// */}
        <Route
          path="/company-information/:id"
          element={
            <HeaderLisProducts
              title="Company information"
              listActive
              children={<AdminCompanyInformation />}
            />
          }
        />
        <Route
          path="/addcompany/"
          element={
            <HeaderLisProducts
              listActive
              title="Add company"
              children={<AddedAdminCompany />}
            />
          }
        />
        <Route
          path="/admin-media/"
          element={
            <HeaderLisProducts title="Add Media" children={<MediaAdmin />} />
          }
        />
        <Route
          path="/profile/"
          element={<HeaderLisProducts title="Profile" children={<Profile />} />}
        />
        <Route
          path="/admin-product/"
          element={
            <HeaderLisProducts title="Product" children={<AdminProduct />} />
          }
        />

        <Route
          path="/user/:id/gallery"
          element={
            <Interface>
              <Media />
            </Interface>
          }
        />
        <Route
          path="/user/:id/inventary"
          element={
            <Interface>
              <Products />
            </Interface>
          }
        />
        <Route
          path="/user/:id/share"
          element={
            <Interface>
              <Share />
            </Interface>
          }
        />
        <Route
          path="/bank-details"
          element={
            <HeaderLisProducts
              listActive
              title="Bank details/cards"
              children={<AdminBanks />}
            />
          }
        />

        {/* //Contact */}

        <Route
          path="/contact-phone"
          element={
            <HeaderAdmin
              title="Contact phones"
              arrayList={listContact}
              children={<ContactAdmin />}
            />
          }
        />
        <Route
          path="/emailPage"
          element={
            <HeaderAdmin
              title="Contact E-mails"
              arrayList={listContact}
              children={<AdminEmail />}
            />
          }
        />
        <Route
          path="/social"
          element={
            <HeaderAdmin
              title="Social"
              arrayList={listContact}
              children={<AdminSocial />}
            />
          }
        />
        <Route
          path="/follow"
          element={
            <HeaderAdmin
              title="Follow me"
              arrayList={listContact}
              children={<AdminFollows />}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

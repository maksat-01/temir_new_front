import {Routes, Route} from "react-router-dom";
import SignIn from "./components/signIn/SignIn";
import Interface from "./pages/interface/Interface";
import Header from "./components/header/index";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Basket from "./pages/basket/basket";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/interface" element={<Interface/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes></>
    );
}

export default App;

// src/App.tsx
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from './context/ThemeContext';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import BannerSection from "./components/BannerSection";
import Newsletter from "./components/Newsletter";
import FeatureSectionServiceShop from "./components/FeatureSectionServiceShop.tsx";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import ForgotPass from "./pages/ForgotPass.tsx";
import Cart from "./pages/Cart.tsx";
import Checkout from "./pages/Checkout.tsx";
import Breadcrumb from "./components/Breadcrumb";
import ProductList from "./pages/ProductList.tsx";
import ScrollToTop from './components/ScrollToTop';
import FeatureSectionInfoShop from "./components/FeatureSectionInfoShop.tsx";
import OrderHistory from "./pages/OrderHistory.tsx";

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <ScrollToTop/>
                <Navbar/>
                <Breadcrumb/>
                <Routes>
                    <Route path="/" element={
                        <main>
                            <div className="relative z-10" style={{width: '100%', height: '60vh', marginTop: '4vh'}}>
                                <Hero/>
                            </div>
                            <FeatureSectionFruits/>
                            <FeatureSectionBreakfast/>
                            <BannerSection/>
                            <Newsletter/>
                            <FeatureSectionServiceShop/>
                            <FeatureSectionInfoShop/>
                        </main>
                    }/>
                    <Route path="/product/:id" element={
                        <ProductDetail
                            id={0}
                            images={["/product__1.webp", "/product__2.webp", "/product__3.webp"]}
                            name="Xoài Sấy"
                            price="$20"
                            description="Xoài sấy ngon với vị ngọt và chua."
                            rating={4}
                            reviews={[
                                {rating: 5, comment: "Tuyệt vời!", image: "/review_image_1.jpg"},
                                {rating: 4, comment: "Rất tốt, nhưng hơi ngọt.", video: "/review_video_1.mp4"}
                            ]}
                        />
                    }/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/forgotpass" element={<ForgotPass/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/products" element={<ProductList/>}/>
                    <Route path="/order-history" element={<OrderHistory />} />

                </Routes>
                <Footer/>
            </Router>
        </ThemeProvider>
    );
}

export default App;

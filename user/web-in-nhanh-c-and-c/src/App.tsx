// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Newsletter from "./components/Newsletter";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPass from "./components/ForgotPass";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Breadcrumb from "./components/Breadcrumb";
import ProductList from "./components/ProductList.tsx";
import ScrollToTop from './components/ScrollToTop';

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
                            <div className="relative z-10">
                                <Hero/>
                            </div>
                            <Category/>
                            <FeatureSectionFruits/>
                            <FeatureSectionBreakfast/>
                            <BannerSection/>
                            <BlogSection/>
                            <Newsletter/>
                            <FeatureSection/>
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
                    } />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forgotpass" element={<ForgotPass />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/category/:id" element={<ProductList />} />
                </Routes>
                <Footer/>
            </Router>
        </ThemeProvider>
    );
}

export default App;

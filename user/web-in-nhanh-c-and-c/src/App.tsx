// src/App.tsx
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
import Checkout from "./components/Checkout.tsx";
import Breadcrumb from "./components/Breadcrumb.tsx";

const App = () => {
    return (
        <Router>
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
                        name="Dried Mango"
                        price="$20"
                        description="Delicious dried mango with a sweet and tangy taste."
                        rating={4}
                        reviews={[
                            {rating: 5, comment: "Excellent!", image: "/review_image_1.jpg"},
                            {rating: 4, comment: "Very good, but a bit too sweet.", video: "/review_video_1.mp4"}
                        ]}
                    />
                }/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/forgotpass" element={<ForgotPass/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout />} />

            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;

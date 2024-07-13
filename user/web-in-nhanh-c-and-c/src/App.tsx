// user/web-in-nhanh-c-and-c/src/App.tsx
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Category from "./components/Category.tsx";
import FeatureSectionFruits from "./components/FeatureSectionFruits.tsx";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast.tsx";
import BannerSection from "./components/BannerSection.tsx";
import BlogSection from "./components/BlogSection.tsx";
import Newsletter from "./components/Newsletter.tsx";
import FeatureSection from "./components/FeatureSection.tsx";
import Footer from "./components/Footer.tsx";
import SignUp from "./components/SignUp.tsx";
import SignIn from "./components/SignIn.tsx";
import ForgotPass from "./components/ForgotPass.tsx";

const App = () => {
    return (
    <main>
        <Navbar />
        <Hero/>
        <Category/>
        <FeatureSectionFruits/>
        <FeatureSectionBreakfast/>
        <BannerSection/>
        <BlogSection/>
        <Newsletter/>
        <FeatureSection/>
        <Footer/>
        <SignUp />
        <SignIn />
        <ForgotPass />
    </main>
    );
}

export default App;

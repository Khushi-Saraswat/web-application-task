import Carousel from "./components/Carousel";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import PromotionalBanner from "./components/PromotionalBanner";



function Home(){
    return(

       <div>
         <Navbar/>
         <Carousel/>
         <Category/>
         <PromotionalBanner/>
         <Newsletter/>
         <Footer/>
       </div>


    );

}

export default Home;
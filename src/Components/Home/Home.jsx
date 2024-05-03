import Footer from "../SheredComponent/Footer";
import Navbar from "../SheredComponent/Navbar";
import Banner from "./Banner";
import OurService from "./OurService";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurService></OurService>
          
            <Footer></Footer>
        </div>
    );
};

export default Home;
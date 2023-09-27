import AllDonations from "../AllDonations/AllDonations";
import Banner from "../Banner/Banner";
import './Home.css'

const Home = () => {
    return (
        <div className="banner-container">
            <div className="banner-overlay">
            <div>
            <Banner></Banner>
            <AllDonations></AllDonations>
        </div> 
            </div>
        </div>
        

    );
};

export default Home;
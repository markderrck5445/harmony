import React from 'react';
import pic1 from '../img/pic1.jpg'; // Assuming pic2 is in the img folder
function Home() {
    // const products = [
    //     {
    //         id: 1,
    //         name: "Body Wash",
    //         price: "$25.50",
    //         originalPrice: "$30.00",
    //         discount: "-15%",
    //         image: "/images/body-wash.jpg", 
    //         brand: "BROWN"
    //     },
    //     {
    //         id: 2,
    //         name: "Daily Face Wash",
    //         price: "$18.00",
    //         originalPrice: "$22.00",
    //         discount: "-18%",
    //         image: "/images/face-wash.jpg", 
    //         brand: "BROWN"
    //     }
    // ];

    return (
        <>
        <div className="homepage" style={{
          backgroundcolor: '#9AFBA3',
            minHeight: '100vh'
        }}>
        <div className="homepage-container">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Cosmetics that<br />
                  <span className="hero-subtitle">Everyone loves!</span>
                </h1>
                <p className="hero-description">
                  We have a huge collection of cosmetics in Nairobi main Branch our
                  Products are always Quality products.
                </p>
                <button className="cta-button">
                  Explore Products
                </button>
              </div>

              {/* <div className="hero-image">
              <img src={pic1} alt="Hero" className="hero-img" />
              </div> */}

            </div>
          </div>
                  
        </div>
      </div>
             
        <div className="foot">
          <div className="foot-container">
            <h2>Our Products</h2>
          </div>
        </div>
           
        </>
    );
}

export default Home;
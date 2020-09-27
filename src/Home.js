import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Will to Keep Winning by Daigo Umehara and T. Christopher Kusuda Paperback"
            price={299.99}
            image="https://m.media-amazon.com/images/I/61jeVTcUXbL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="MAHP Brand Microfiber Twist Mop Silver Heavy Duty Tough On Scrubs Hand Release Mess Free"
            price={3999.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51u9GAvA-+L._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Xbox Series S 500GB"
            price={6999.99}
            rating={5}
            image="https://i.insider.com/5f57904b7ed0ee001e25ddff?width=1100&format=jpeg&auto=webp"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={1799.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={8999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={11149.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

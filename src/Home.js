import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__banner"
          src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
          alt="amazon banner"
        />
        <div className="home__row">
          <Product
            id="1212113131"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49949495"
            title="Kenwood kMix Stand Mixer for Bakeing, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Littre Glass Bowl"
            price={239.99}
            image="https://m.media-amazon.com/images/I/21eRttw-OZL._AC_SY230_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="223949495"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
            rating={3}
          />
          <Product
            id="4954319495"
            title="Amazon Echo (3rd generation) | 
            Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            rating={5}
          />
          <Product
            id="4994443335"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128Gb) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4966443335"
            title="Samsung LC49RG90SSUXEN 49' Curved
          LED Gaming Monitor - Super Ultra Wide Dual
          WQHD 5120x1440"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._ACSX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "../../assets/styles/Home.css";
import Product from "../../components/Product";
import productsData from "../../data/productsData";
import ImageSlider from "./ImageSlider";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <ImageSlider />
        <div className="home__products">
          {productsData.map((item) => {
            return (
              <Product
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

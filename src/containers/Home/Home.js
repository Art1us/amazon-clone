import React from "react";
import "../../assets/styles/Home.css";
import CombinedProduct from "../../components/CombinedProduct";
import Product from "../../components/Product";
import ProductCategories from "../../components/ProductCategories";
import productsData from "../../data/productsData";
import { newProducts, combinedProducts } from "../../data/productsData";
import ImageSlider from "./ImageSlider";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <ImageSlider />
        <div className="home__products">
          <ProductCategories/>
          <CombinedProduct/>       

          {newProducts.map((item) => {
            return (
              <Product
                key={`home${item.id}`}
                id={item.id}
                title={item.title}
                image={item.image}
                cta={item.cta}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

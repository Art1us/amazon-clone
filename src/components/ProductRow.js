import React from "react";
import Product from "./Product";
import ProductCategories from "./ProductCategories";
import CombinedProduct from "./CombinedProduct";
import { newProducts } from "../data/productsData";

function ProductRow({ rowLength, index }) {
  const start = index * rowLength;
  const end = rowLength * (index + 1);

  return (
    <>
      {newProducts.slice(start, end).map((prod) => {
        if (prod.type === "categories") {
          return <ProductCategories data={prod}/>;
        }
        if (prod.type === "combined") {
          return <CombinedProduct data={prod}/>;
        }
        return <Product data={prod} />;
      })}
    </>
  );
}

export default ProductRow;

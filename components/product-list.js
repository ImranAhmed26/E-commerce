import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

import ProductCard from "./product-card";

const ProductPage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://idbdev.com/motion2/public/api/product-is-here-caught-me",
      responseType: "steam",
    }).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  grid-flow-row max-w-4xl xl:max-w-6xl gap-x-3 mx-auto">
          {products?.data.map((item, index) => {
            return (
              <div key={index} className="">
                <ProductCard
                  className=""
                  name={item.name}
                  image={item.image}
                  price={item.regular_price}
                  sellPrice={item.regular_price}
                  stock={item.stock}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

<div></div>;

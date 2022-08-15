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
    <div className="bg-gray-100 h-screen text-gray-700">
      <div className="max-w-4xl xl:max-w-6xl mx-auto my-2 py-3 px-6 text-left text-2xl font-semibold bg-gray-300 rounded-md drop-shadow">
        <div className="drop-shadow-md">Popular Products</div>
      </div>
      <div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  grid-flow-row max-w-4xl xl:max-w-6xl gap-x-3 gap-y-1 mx-auto px-8 lg:px-6">
          {products?.data.map((item, index) => {
            return (
              <div key={index} className="">
                <ProductCard
                  className=""
                  name={item.name}
                  productImage={item.image}
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

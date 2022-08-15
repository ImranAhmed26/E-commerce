import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://idbdev.com/motion2/public/api/product-is-here-caught-me",
      responseType: "steam",
    }).then((response) => {
      setProducts(response.data.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <div>
        {/* <div>{products.map((item) => {})}</div> */}
        {console.log(products)}
      </div>
    </div>
  );
};

export default ProductPage;

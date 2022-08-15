import Image from "next/image";
import React from "react";

import ProductImage from "../public/assets/images/55.jpg";

const ProductCard = ({ name, image, price, sellPrice, stock }) => {
  return (
    <div className=" lg:w-64 pt-6 px-10 bg-white text-gray-700 font-semibold rounded-md m-auto mt-6 drop-shadow-md mx-6">
      <div>
        <Image src={ProductImage} width={200} height={200} alt="img" />
      </div>
      <div className="text-xl">{name}</div>
      <div className="flex justify-between py-3">
        <div className="">{sellPrice}</div>
        <div className="text-gray-400 line-through">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;

import Image from "next/image";
import React from "react";

import ProductImage from "../public/assets/images/55.jpg";

const ProductCard = ({ name, image, price, sellPrice, stock }) => {
  return (
    <div className=" lg:w-68 pt-6 px-10 bg-white text-gray-700 font-semibold rounded-md m-auto mt-2 drop-shadow-md">
      <div>
        <Image src={ProductImage} width={200} height={200} alt="img" />
      </div>
      <div className="text-xl">{name}</div>
      <div className="flex justify-between py-3">
        <div className="">{sellPrice}</div>
        <div className="text-gray-400 line-through">{price}</div>
      </div>
      <div className="flex justify-between gap-1">
        <div className="text-gray-800 text-center drop-shadow bg-cyan-400 rounded py-1 px-2 my-2 cursor-pointer">{`Add to Cart`}</div>
        <div className="text-gray-800 text-center drop-shadow bg-cyan-400 rounded py-1 px-2 my-2 cursor-pointer">{`Buy Now`}</div>
      </div>
    </div>
  );
};

export default ProductCard;

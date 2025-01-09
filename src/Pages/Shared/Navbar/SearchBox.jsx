import React, { useState, useEffect } from "react";
import SocialMedia from "../social-media-icons/SocialMedia";
import ProductSearchCard from "../Search/Searchwork";
import { BiHome } from "react-icons/bi";

import { BsFillPeopleFill } from "react-icons/bs";
import Message from "./Message";
import AddToCartButton from "./AddToCartButton";

const SearchBox = () => {


  return (
    <div className=" flex items-center justify-between px-4  bg-gray-50">
      {/* Search Box */}
      <div className="text-2xl flex items-center">
        <div><BiHome /></div>
        <div className="px-3"><BsFillPeopleFill /> </div>
      </div>
      <div className="w-full px-4">
        <ProductSearchCard />
      </div>

      {/* Social Media Icons */}
      {/* <div className="">
        <SocialMedia />
      </div> */}
      <div className="flex space-x-2">
            <Message />
            <AddToCartButton />
          </div>

    </div>
  );
};

export default SearchBox;

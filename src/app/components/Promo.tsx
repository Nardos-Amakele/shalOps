import Link from "next/link";
import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

const Promo = () => {
  return (
    <div className="bg-black text-white text-xs md:text-sm text-center py-1">
      <div className="flex items-center justify-center ">
        Get 30% off custom startup software! Contact us today
        <span className=" flex ml-2 items-center">
          <Link href="#contact">
            <FaArrowRightLong fill="#E7DFF4" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Promo;

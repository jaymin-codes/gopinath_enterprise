import React from "react";
import airbnb from "../images/authDealers/airbnb.svg";
import facebook from "../images/authDealers/facebook.svg";
import apple from "../images/authDealers/apple.svg";
import disney from "../images/authDealers/disney.svg";
import samsung from "../images/authDealers/samsung.svg";

function AuthoDealer() {
  return (
    <div className="container mx-auto mb-4">
      <p id="authoDealers" className="text-3xl text-center font-semibold p-2 mb-4">
        Authorised Dealer
      </p>
      <div className="flex justify-center">
        <div className="grid justify-items-center grid-cols-2 md:grid-cols-6">
          <img className="p-2 m-2 h-[40px] md:h-[60px]" src={apple} alt="" />
          <img className="p-2 m-2 h-[40px] md:h-[60px]" src={airbnb} alt="" />
          <img className="p-2 m-2 h-[40px] md:h-[60px]" src={samsung} alt="" />
          <img className="p-2 m-2 h-[40px] md:h-[60px]" src={disney} alt="" />
          <img className="p-2 m-2 h-[40px] md:h-[60px]" src={facebook} alt="" />
          <img className="p-2 m-2 h-[40px] md:h-[60px]" src={facebook} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AuthoDealer;


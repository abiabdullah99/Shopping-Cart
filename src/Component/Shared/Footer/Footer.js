import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="mt-[-40px]">
      <footer class="footer p-10 bg-primary mt-10 text-white md:px-20 mx-auto">
        <div className="lg:ml-14">
          <h1>
            Copyright ©2022 All rights reserved | <br /> This template is made
            with by
            <span className="span"> Abi Abdullah</span>
          </h1>
        </div>
        <div className="lg:ml-14">
          <span class=" text-xl font-bold text-black">Services</span>
          <h1 class="link link-hover text-lg font-semibold">Delivery</h1>
          <h1 class="link link-hover text-lg font-semibold">Fresh Food</h1>
          <h1 class="link link-hover text-lg font-semibold">Best Chief</h1>
          <h1 class="link link-hover text-lg font-semibold">Customer Care</h1>
        </div>
        <div className="lg:ml-14">
          <span class=" text-xl font-bold text-black">Follow Us</span>
          <h1>Let us be social</h1>
          <div className="flex gap-5">
            <BsFacebook className=" text-xl font-bold" />
            <BsTwitter className=" text-xl font-bold" />
            <BsInstagram className=" text-xl font-bold" />
          </div>
        </div>
        <div className="lg:ml-14">
          <span class=" text-xl font-bold text-black">Address</span>
          <h1 class="link link-hover text-lg font-semibold">570 8th Ave,</h1>
          <h1 class="link link-hover text-lg font-semibold">
            NY 10018, Bepari Bazar
          </h1>
          <h1 class="link link-hover text-lg font-semibold">
            Bhola, Bangladesh
          </h1>
          <h1 class="link link-hover text-lg font-semibold">
            Starts 8.00 AM – 11.00 PM
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

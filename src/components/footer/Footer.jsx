// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left */}
        <div className="flexColStart f-left">
          <h2 className="font-bold lg:text-[30px] italic">Habitchingu</h2>
          <span className="secondaryText">
            Our vision is the best place to make people happy <br />
            the best thing to happen
          </span>
        </div>

        {/* Right */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Anambra state Nigeria</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>

        
      </div>
      <div className="last-footer">
          @incorporated 2023
          by giggle@gmail.com
        </div>
    </section>
  );
};

export default Footer;

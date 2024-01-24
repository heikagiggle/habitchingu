/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { animate, motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  // for email state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //for button
  const handleButtonClick = () => {
    if (email) {
      console.log(`Email entered: ${email}`);

      window.alert(
        "You have successfully subscribed to our newsletter. Thank you!"
      );
      // to clear the input
      setEmail("");
    }
  };
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="pink-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover <br />
              your good &<br />
              bad habits
            </motion.h1>
          </div>

          <div className="flexColStart hero-description">
            <span className="secondaryText">
              Habits are like the little dance moves of our everyday lives.
            </span>
            <span className="secondaryText">
              They are like the warm, familiar hugs our days give us.
            </span>
            <span className="secondaryText">
              Need help improving on your habits for daily life? We got you!
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
            <button className="button" onClick={handleButtonClick}>
              Subscribe
            </button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={10} end={30} duration={4} separator="," />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={10} end={50} duration={4} separator="," />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={2} separator="," />
                <span>+</span>
              </span>
              <span className="secondaryText">Award winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./habit.jpg" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

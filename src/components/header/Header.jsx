import { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  return (
    <section className="header__wrapper">
      <div className="flexCenter paddings innerWidth header__container">
        <h2>HabitChingu</h2>

        <OutsideClickHandler
        onOutsideClick={()=>{
          setMenuOpen(false)
        }}>
          
          <div className="flexCenter header__menu" style={getMenuStyles(menuOpen)}>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/habit">My Habits</Link>
            <Link to="/review">Reviews</Link>
           
            <Link className="button" to="/sign">Sign up</Link>
          
          </div>
        </OutsideClickHandler>

        {/* 
        <div className="flexCenter header__menu" style={getMenuStyles()}>
          <a href="">Our Value</a>
          <a href="">My Habits</a>
          <a href="">Statistics</a>
          <a href="">Reviews</a>
          <button className="button">
            <a href="">Get Started</a>
          </button>
        </div> */}

        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

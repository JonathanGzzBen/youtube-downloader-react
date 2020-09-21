import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="slidemenu">
        <input
          type="radio"
          id="slide-item-1"
          name="video"
          className="slide-toggle"
          defaultChecked
        />
        <label htmlFor="slide-item-1">
          <p className="icon">♬</p>
          <span>Full</span>
        </label>

        <input
          type="radio"
          id="slide-item-2"
          name="video"
          className="slide-toggle"
        />
        <label htmlFor="slide-item-2">
          <p className="icon">★</p>
          <span>No Sound</span>
        </label>

        <input
          type="radio"
          id="slide-item-3"
          name="video"
          className="slide-toggle"
        />
        <label htmlFor="slide-item-3">
          <p className="icon">✎</p>
          <span>No Video</span>
        </label>

        <input
          type="radio"
          id="slide-item-4"
          name="video"
          className="slide-toggle"
        />
        <label htmlFor="slide-item-4">
          <p className="icon">✎</p>
          <span>No Video</span>
        </label>

        <div className="clear"></div>

        <div className="slider">
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

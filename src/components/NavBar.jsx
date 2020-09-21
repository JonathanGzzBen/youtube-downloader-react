import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const history = useHistory();

  function handleRouteChange(e) {
    history.push(`/${e.currentTarget.value}`);
  }

  return (
    <div>
      <nav className="slidemenu">
        <input
          type="radio"
          id="slide-item-1"
          name="route"
          className="slide-toggle"
          defaultChecked
          value=""
          onChange={(e) => handleRouteChange(e)}
        />
        <label htmlFor="slide-item-1">
          <p className="icon">⭐</p>
          <span>Home</span>
        </label>

        <input
          type="radio"
          id="slide-item-2"
          name="route"
          className="slide-toggle"
          value="full"
          onChange={(e) => handleRouteChange(e)}
        />
        <label htmlFor="slide-item-2">
          <p className="icon">📹</p>
          <span>Full</span>
        </label>

        <input
          type="radio"
          id="slide-item-3"
          name="route"
          className="slide-toggle"
        />
        <label htmlFor="slide-item-3">
          <p className="icon">🔊</p>
          <span>Sound Only</span>
        </label>

        <input
          type="radio"
          id="slide-item-4"
          name="route"
          className="slide-toggle"
        />
        <label htmlFor="slide-item-4">
          <p className="icon">🔇</p>
          <span>Video Only</span>
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

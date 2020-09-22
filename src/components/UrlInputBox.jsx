import React from "react";
import urlInputBoxStyles from "../styles/UrlInputBox.module.css";

const UrlInputBox = () => {
  return (
    <div style={urlInputBoxStyles}>
      <input id="url-box" type="text" placeholder="Enter video's url here..." />
      <button>Download</button>
    </div>
  );
};

export default UrlInputBox;

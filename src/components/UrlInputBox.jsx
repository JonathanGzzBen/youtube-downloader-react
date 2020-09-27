import React from "react";
import urlInputBoxStyles from "../styles/UrlInputBox.module.css";

const UrlInputBox = (props) => {
  const { onSearchButtonClick } = props;
  return (
    <div className={urlInputBoxStyles["url-input-box"]}>
      <input id="url-box" type="text" placeholder="Enter video's url here..." />
      <button
        onClick={() =>
          onSearchButtonClick(document.getElementById("url-box").value)
        }
      >
        Search
      </button>
    </div>
  );
};

export default UrlInputBox;

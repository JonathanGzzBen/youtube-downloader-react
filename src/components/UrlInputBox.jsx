import React from "react";
import urlInputBoxStyles from "../styles/UrlInputBox.module.css";

const UrlInputBox = (props) => {
  const { onDownloadButtonClick } = props;
  return (
    <div className={urlInputBoxStyles["url-input-box"]}>
      <input id="url-box" type="text" placeholder="Enter video's url here..." />
      <button
        onClick={() =>
          onDownloadButtonClick(document.getElementById("url-box").value)
        }
      >
        Download
      </button>
    </div>
  );
};

export default UrlInputBox;

import React from "react";
import api from "../../services/api";
import UrlInputBox from "../UrlInputBox";

const Full = () => {
  const downloadButtonClickHandler = (videoUrl) => {
    api.v1.getDetails(videoUrl).then((response) => console.log(response.data));
  };

  return (
    <div className="content">
      <h1>Full Download</h1>
      <UrlInputBox onDownloadButtonClick={downloadButtonClickHandler} />
    </div>
  );
};

export default Full;

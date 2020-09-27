import React from "react";
import api from "../services/api";
import urlInputBoxStyles from "../styles/UrlInputBox.module.css";

class UrlInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: true,
    };

    this.handleSearchButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    const videoUrl = document.getElementById("url-box").value;
    if (this.state.showSearch) {
      this.props.onSearchButtonClick(videoUrl);
      this.setState({ showSearch: false });
    } else {
      api.v1.downloadVideo(videoUrl);
    }
  }

  render() {
    return (
      <div className={urlInputBoxStyles["url-input-box"]}>
        <input
          id="url-box"
          type="text"
          placeholder="Enter video's url here..."
        />
        <button onClick={() => this.handleButtonClick()}>
          {this.state.showSearch ? "Search" : "Download"}
        </button>
      </div>
    );
  }
}

export default UrlInputBox;

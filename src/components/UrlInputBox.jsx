import React from "react";
import urlInputBoxStyles from "../styles/UrlInputBox.module.css";

class UrlInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: true,
      isLoading: false,
    };

    this.handleSearchButtonClick = this.handleButtonClick.bind(this);
  }

  async handleButtonClick() {
    const videoUrl = document.getElementById("url-box").value;
    this.setState({ isLoading: true });
    if (this.state.showSearch) {
      this.setState({ showSearch: false });
      await this.props.onSearchButtonClick(videoUrl);
    } else {
      this.setState({ showSearch: true });
      await this.props.onDownloadButtonClick(videoUrl);
    }
    this.setState({ isLoading: false });
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
          {this.state.isLoading ? (
            <img
              src="https://cdnjs.cloudflare.com/ajax/libs/timelinejs/2.25/css/loading.gif"
              alt="Loading"
            />
          ) : this.state.showSearch ? (
            "Search"
          ) : (
            "Download"
          )}
        </button>
      </div>
    );
  }
}

export default UrlInputBox;

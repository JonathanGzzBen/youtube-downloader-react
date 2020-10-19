import fileDownload from "js-file-download";
import React from "react";
import api from "../../services/api";
import UrlInputBox from "../UrlInputBox";
import VideoDetails from "../VideoDetails";

class Full extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoDetails: null,
    };
    this.searchButtonClickHandler = this.searchButtonClickHandler.bind(this);
    this.downloadButtonClickHandler = this.downloadButtonClickHandler.bind(
      this
    );
  }

  async searchButtonClickHandler(videoUrl) {
    try {
      await api.v1.getDetails(videoUrl).then((response) => {
        this.setState({
          videoDetails: response.data,
        });
      });
    }
    catch (e) {
      alert(e.message);
    }
  }

  async downloadButtonClickHandler(videoUrl) {
    await api.v1.downloadVideo(videoUrl).then((response) => {
      fileDownload(response.data, "my_video.mp4");
    });
  }

  render() {
    return (
      <div className="content">
        <h1>Full Download</h1>
        <UrlInputBox
          onSearchButtonClick={this.searchButtonClickHandler}
          onDownloadButtonClick={this.downloadButtonClickHandler}
        />
        {this.state.videoDetails && (
          <VideoDetails {...this.state.videoDetails} />
        )}
      </div>
    );
  }
}

export default Full;

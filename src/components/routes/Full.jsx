import React from "react";
import api from "../../services/api";
import UrlInputBox from "../UrlInputBox";
import VideoDetails from "../VideoDetails";

class Full extends React.Component {
  constructor(props) {
    super(props);
    this.searchButtonClickHandler = this.searchButtonClickHandler.bind(this);
    this.state = {
      videoDetails: null,
    };
  }

  searchButtonClickHandler(videoUrl) {
    api.v1.getDetails(videoUrl).then((response) => {
      this.setState({
        videoDetails: response.data,
      });
    });
  }
  render() {
    return (
      <div className="content">
        <h1>Full Download</h1>
        <UrlInputBox onSearchButtonClick={this.searchButtonClickHandler} />
        {this.state.videoDetails !== null ? (
          <VideoDetails {...this.state.videoDetails} />
        ) : null}
      </div>
    );
  }
}

export default Full;

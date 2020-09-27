import React from "react";
import styles from "../styles/VideoDetails.module.css";

const VideoDetails = (props) => {
  const { title, author, thumbnails, engagement, duration } = props;

  const detailsList = [
    {
      name: "Author",
      value: author,
    },
    {
      name: "Views",
      value: engagement.viewCount,
    },
    {
      name: "Duration",
      value: `${duration.hours}:${duration.minutes}:${duration.seconds}`,
    },
  ];

  return (
    <div className={styles["video-details"]}>
      <div>
        <img src={thumbnails.highResUrl} alt="thumbnail" />
      </div>
      <div>
        <h2>{title}</h2>
        <hr />
        <table>
          <tr>
            {detailsList.map((detail) => {
              return (
                <tr>
                  <td>{detail.name}:</td>
                  <td>{detail.value}</td>
                </tr>
              );
            })}
          </tr>
        </table>
      </div>
    </div>
  );
};

export default VideoDetails;

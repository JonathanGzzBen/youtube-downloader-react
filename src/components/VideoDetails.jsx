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
          <tbody>
            {detailsList.map((detail, index) => {
              return (
                <tr key={index}>
                  <th>{detail.name}:</th>
                  <td>{detail.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VideoDetails;

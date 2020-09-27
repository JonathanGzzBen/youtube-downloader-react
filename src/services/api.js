import axios from "axios";
import fileDownload from "js-file-download";

const clientV1 = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});

const v1 = {
  getDetails: (videoUrl) => {
    return clientV1.get("/videos/details/", {
      params: { videoUrl: videoUrl },
    });
  },
  downloadVideo: (videoUrl) => {
    clientV1
      .get("/videos/download/", {
        params: { videoUrl: videoUrl },
        responseType: "blob",
      })
      .then((response) => {
        fileDownload(response.data, "video.mp4");
      });
    return;
  },
};

export default {
  v1,
};

import axios from "axios";

const clientV1 = axios.create({
  baseURL: "https://localhost:44319/api/v1/",
});

const v1 = {
  getDetails: (videoUrl) => {
    return clientV1.get("/videos/details/", {
      params: { videoUrl: videoUrl },
    });
  },
};

export default {
  v1,
};

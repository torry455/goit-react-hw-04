import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "nQq7oRQjD1lM8rnjco1YNkYx_D5Vi3q3nYk8Ow3keBc";

const searchParms = {
  client_id: ACCESS_KEY,
  query: "",
  page: 1,
  per_page: 20,
  orientation: "landscape",
};

const requestImagesByQuery = async (query, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      ...searchParms,
      page,
      query,
    },
  });
  return data;
};

export default requestImagesByQuery;
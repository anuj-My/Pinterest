import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization: "Client-ID hRXnwDcMaUe3YnjaxCUapqZvQGO4_ByLCmYxCJHip58",
  },
});

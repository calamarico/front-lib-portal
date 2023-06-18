import axios from "axios";

export default axios.create({
  baseURL: "https://openlibrary.org/",
  headers: {
    "Content-type": "application/json"
  }
});

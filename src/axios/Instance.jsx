import axios from "axios";

const userRoute = axios.create({
//   baseURL: "http://localhost:8081/",
  baseURL: "https://local-search-api-production.up.railway.app/",
});
export default userRoute;

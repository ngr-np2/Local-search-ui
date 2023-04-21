import axios from "axios";

const userRoute = axios.create({
//   baseURL: "http://localhost:8081/",
  baseURL: "https://local-search-api-production.up.railway.app/",
});
export default userRoute;
// a0e2f60c-80d5-4d32-95d0-e6247c6277ed
import axios from 'axios';
var axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 30000,
  headers: {'Content-Type': 'application/json'},
  // credentials: true,
  // withCredentials: true,
});
export default axiosInstance;
//# sourceMappingURL=index.js.map
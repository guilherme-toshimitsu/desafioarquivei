import api from "../api";

const path = "/oauth/token";

const login = (data) => api.request(`${path}`, { data, method: "POST" });

export default {
  login,
};

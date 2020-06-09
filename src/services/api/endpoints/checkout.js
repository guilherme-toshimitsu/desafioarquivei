import api from "../api";

const path = "/checkout";

const purchaseConsults = (data) =>
  api.request(`${path}/consults`, { data, method: "POST" });

export default {
  purchaseConsults,
};

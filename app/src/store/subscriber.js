import store from "../store";
import axios from "axios";

store.subscribe((mutation) => {
  switch (mutation.type) {
    case "auth/SET_TOKEN":
      if (mutation.payload !== null) {
        axios.defaults.headers.common["x-access-token"] = `${mutation.payload}`;
        localStorage.setItem("token", mutation.payload);
      } else {
        axios.defaults.headers.common["x-access-token"] = null;
        localStorage.removeItem("token");
      }
      break;
    default:
      break;
  }
});

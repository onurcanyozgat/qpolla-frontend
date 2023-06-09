import axios from "axios";

import { API_BASE_URL, API_URL_POLL } from "../constant";
import authHeader from "./util/AuthHeader";

class PollService {
  static getCategories() {
    alert(API_BASE_URL + API_URL_POLL + "category");
    // return axios.get(API_BASE_URL + API_URL_POLL, { headers: authHeader() });
    return axios.get(API_BASE_URL + API_URL_POLL + "category");
  }

  static filterByCategory(params) {
    alert(API_BASE_URL + API_URL_POLL + "filter-category");
    // return axios.get(API_BASE_URL + API_URL_POLL, { headers: authHeader() });
    return axios.get(API_BASE_URL + API_URL_POLL + "filter-category");
  }

   static vote() {
    console.log("Testt");
    return axios.patch(API_BASE_URL + API_URL_POLL +'vote', {
      pollId: 1,
      optionId: 1,
      userId: 1
    });
  }

}

export default PollService;

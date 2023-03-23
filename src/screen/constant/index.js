import {getData} from "../../util/Storage"

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";
export const ACCESS_TOKEN = "JWTSuperSecretKey2";

export const API_URL_POLL = "/poll/";

export const CONFIG = {
    headers: {
      Authorization: "Bearer " + getData(ACCESS_TOKEN),
    },
  };
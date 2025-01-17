import Cookies from "js-cookie";
import axios from "axios";
import { getBaseUrl, getBaseUrl2 } from "../../utils";

export const fetchallCustomers = async (data, role) => {
  let config = {
    method: "get",
    url: getBaseUrl2() + "getLead",
    headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    // data: data
  };
  try {
    let res = await axios(config);
    return res;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
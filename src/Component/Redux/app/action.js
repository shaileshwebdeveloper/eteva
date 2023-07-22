import axios from "axios";
import { useSelector } from "react-redux";
import * as types from "./actionTypes";

export const getproducts = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get("http://localhost:3001/products")
    .then((r) => {
      // console.log(r)
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: e });
    });
};

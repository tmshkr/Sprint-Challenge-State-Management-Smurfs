import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3333"
});

export const getSmurfs = () => dispatch => {
  dispatch({
    type: GET_SMURFS
  });
  axios.get("/smurfs").then(({ data }) => {
    dispatch({
      type: SET_SMURFS,
      payload: data
    });
  });
};

export const GET_SMURFS = "GET_SMURFS";
export const SET_SMURFS = "SET_SMURFS";

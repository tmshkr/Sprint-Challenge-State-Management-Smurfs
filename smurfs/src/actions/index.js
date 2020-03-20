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

export const addSmurf = (values, history, setError) => dispatch => {
  dispatch({
    type: ADD_SMURF
  });
  axios
    .post("/smurfs", values)
    .then(({ data }) => {
      dispatch({
        type: SET_SMURFS,
        payload: data
      });
      history.push("/");
    })
    .catch(({ response }) => {
      setError("response", response.statusText, response.data.Error);
    });
};

export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURFS = "GET_SMURFS";
export const SET_SMURFS = "SET_SMURFS";

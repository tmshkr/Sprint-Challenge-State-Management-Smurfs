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
    type: ADD_SMURF,
    payload: values
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

export const deleteSmurf = id => dispatch => {
  dispatch({
    type: DELETE_SMURF,
    id
  });
  axios
    .delete(`/smurfs/${id}`)
    .then(({ data }) => {
      dispatch({
        type: SET_SMURFS,
        payload: data
      });
    })
    .catch(err => {
      console.dir(err);
    });
};

export const editSmurf = (values, id, history, setError) => dispatch => {
  dispatch({
    type: EDIT_SMURF,
    payload: values
  });
  axios
    .put(`/smurfs/${id}`, values)
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
export const DELETE_SMURF = "DELETE_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";
export const GET_SMURFS = "GET_SMURFS";
export const SET_SMURFS = "SET_SMURFS";

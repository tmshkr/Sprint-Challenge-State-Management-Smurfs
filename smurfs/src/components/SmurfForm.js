import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label } from "reactstrap";

import { addSmurf } from "../actions";

function SmurfForm(props) {
  const { history } = props;
  const dispatch = useDispatch();
  const { handleSubmit, register, errors, setError } = useForm();

  const onSubmit = values => {
    values.height = values.height + "cm";
    dispatch(addSmurf(values, history, setError));
  };

  return (
    <form className="form smurf-form" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="name">Name</Label>
        <input
          className="form-control"
          name="name"
          type="text"
          id="name"
          ref={register({
            required: "Required"
          })}
        />
        <span className="error">{errors.name && errors.name.message}</span>
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <input
          className="form-control"
          type="number"
          name="age"
          id="age"
          ref={register({
            required: "Required"
          })}
        />
        <span className="error">{errors.age && errors.age.message}</span>
      </FormGroup>
      <FormGroup>
        <Label for="height">Height (cm)</Label>
        <input
          className="form-control"
          type="number"
          name="height"
          id="height"
          ref={register({
            required: "Required"
          })}
        />
        <span className="error">{errors.height && errors.height.message}</span>
      </FormGroup>
      <Button type="submit" color="primary" size="lg" block>
        Create Smurf
      </Button>
      <span className="error">
        {errors.response && errors.response.message}
      </span>
    </form>
  );
}

export default SmurfForm;

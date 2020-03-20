import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label } from "reactstrap";

import { addSmurf, editSmurf } from "../actions";

function SmurfForm(props) {
  const dispatch = useDispatch();
  const { history, match } = props;
  const { smurfs } = useSelector(state => state);
  const { handleSubmit, register, errors, setError, setValue } = useForm();

  const { id } = match.params;

  useEffect(() => {
    if (id) {
      const match = smurfs.find(s => s.id === Number(id));
      if (match) {
        const values = [];
        const smurf = { ...match }; // returns a reference to state, so make a copy
        smurf.height = Number(smurf.height.slice(0, -2)); // remove "cm"
        for (let key in smurf) {
          values.push({ [key]: smurf[key] });
        }
        setValue(values);
      }
    }
    // eslint-disable-next-line
  }, [id, smurfs]);

  const onSubmit = values => {
    values.height = values.height + "cm";

    id
      ? dispatch(editSmurf(values, id, history, setError))
      : dispatch(addSmurf(values, history, setError));
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
        {id ? "Edit Smurf" : "Create Smurf"}
      </Button>
      <span className="error">
        {errors.response && errors.response.message}
      </span>
    </form>
  );
}

export default SmurfForm;

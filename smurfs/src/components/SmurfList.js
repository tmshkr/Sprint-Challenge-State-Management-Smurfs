import React from "react";
import { Button, Table } from "reactstrap";
import { useSelector } from "react-redux";

function SmurfList(props) {
  const { smurfs } = useSelector(state => state);

  if (!smurfs.length) return <div>Loading...</div>;

  return (
    <div className="smurf-list">
      <header>
        <Button className="add-smurf" color="primary">
          Add Smurf
        </Button>
        <h2>Smurf List</h2>
      </header>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {smurfs.map(smurf => (
            <tr key={smurf.id}>
              <td>{smurf.name}</td>
              <td>{smurf.age}</td>
              <td>{smurf.height}</td>
              <td>
                <Button size="sm" color="danger">
                  delete
                </Button>
                <Button size="sm">edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SmurfList;

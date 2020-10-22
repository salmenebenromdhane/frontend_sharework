import React from "react";

//Import UI components
import { Table, Button } from "reactstrap";

//Import utils
import { useHistory } from "react-router-dom";

const DataTable = ({ items, hideCompany }) => {
  const history = useHistory();

  const companies = items.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>
          <Button
            color="primary"
            onClick={() =>
              history.push({
                pathname: "/company-details/" + item.id,
                state: { id: item.id },
              })
            }
          >
            VIEW
          </Button>
        </td>
        <td>
          <Button color="danger" onClick={() => hideCompany(item.id)}>
            HIDE
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Go</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>{companies}</tbody>
    </Table>
  );
};

export default DataTable;
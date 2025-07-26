import React from "react";

import classes from "./table.module.css";

const TableMolecule = () => {
  return (
    <div className={`${classes.container}`}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>
              <button
                className={`${classes["action-button"]} ${classes["edit"]}`}
              >
                Edit
              </button>
              <button
                className={`${classes["action-button"]} ${classes["delete"]}`}
              >
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane.smith@example.com</td>
            <td>
              <button
                className={`${classes["action-button"]} ${classes["edit"]}`}
              >
                Edit
              </button>
              <button
                className={`${classes["action-button"]} ${classes["delete"]}`}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableMolecule;

import React from "react";

import classes from "./table.module.css";

export interface Column<T> {
  key: keyof T | "actions";
  header: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, item: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

function TableMolecule<T>({ columns, data, onEdit, onDelete }: TableProps<T>) {
  return (
    <div className={classes.container}>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => {
                if (col.key === "actions") {
                  return (
                    <td key={`${rowIndex}-actions`}>
                      {onEdit && (
                        <button
                          className={`${classes["action-button"]} ${classes["edit"]}`}
                          onClick={() => onEdit(item)}
                        >
                          Edit
                        </button>
                      )}
                      {onDelete && (
                        <button
                          className={`${classes["action-button"]} ${classes["delete"]}`}
                          onClick={() => onDelete(item)}
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  );
                }

                const value = item[col.key as keyof T];

                return (
                  <td key={`${rowIndex}-${String(col.key)}`}>
                    {col.render ? col.render(value, item) : String(value)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableMolecule;

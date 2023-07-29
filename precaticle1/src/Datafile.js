import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";


const SAMPLE_DATA = [
    { id: 1, name: "Rushi Kapuriya", age: 30, email: "Rushi@8876.com" },
    { id: 2, name: "Isha Sinojiya", age: 25, email: "ishu@5643.com" },
    { id: 3, name: "Jigs Patel", age: 40, email: "jigs@8743.com" },
    // Add more data as needed
  ];

  
const DataTable = () => {
    const data = useMemo(() => SAMPLE_DATA, []);
   
  
    const columns = useMemo(
      () => [
        { Header: "ID", accessor: "id" },
        { Header: "Name", accessor: "name" },
        { Header: "Age", accessor: "age" },
        { Header: "Email", accessor: "email" },
      ],
      []
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      setGlobalFilter,
    } = useTable({ columns, data }, useGlobalFilter);
  
    const { globalFilter } = state;
  
    const handleSearchChange = (e) => {
      const value = e.target.value || "";
      setGlobalFilter(value.toLowerCase());
    };
  
    return (
      <div>
        <input
          type="text"
          value={globalFilter || ""}
          onChange={handleSearchChange}
          placeholder="Search by name"
        />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DataTable;
  
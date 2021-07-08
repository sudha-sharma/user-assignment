import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";

export const NameTable = props => {
  console.log(props, "yoooo");
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.mobile}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.password}</TableCell>
              <TableCell>
                <EditIcon onClick={() => props.openEditModal(row)} />
                <DeleteIcon onClick={() => props.onDelete(row)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

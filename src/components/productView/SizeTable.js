import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function SizeTable() {
  return (
    <div>
      <TableContainer
        sx={{
          maxWidth: "100%",
        }}
      >
        <Table>
          <TableRow>
            <TableCell>Size</TableCell>
            <TableCell>Small</TableCell>
            <TableCell>Medium</TableCell>
            <TableCell>Large</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>BodyLength</TableCell>
            <TableCell>68.6</TableCell>
            <TableCell>71.1 </TableCell>
            <TableCell>73.7 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>CHEST WIDTH</TableCell>
            <TableCell>50.8</TableCell>
            <TableCell>55.9 </TableCell>
            <TableCell>59.7</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>SLEEVE LENGTH</TableCell>
            <TableCell>87.6</TableCell>
            <TableCell>90.2 </TableCell>
            <TableCell>92.7</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SizeTable;

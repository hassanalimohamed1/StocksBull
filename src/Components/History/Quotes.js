import React, { useLayoutEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import useState from "react-usestateref";

export default function Quotes(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredDates, setFilteredDates] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useLayoutEffect(() => {
    setFilteredDates(
      Object.entries(props.graph)
        .filter((row) => row["0"] >= props.search)
        .reverse()
    );
    setPage(0)
  }, [props.search]);


  return (
    <span>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Open</TableCell>
              <TableCell align="right">High</TableCell>
              <TableCell align="right">Lows</TableCell>
              <TableCell align="right">Close</TableCell>
              <TableCell align="right">Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(filteredDates)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ minWidth: 80 }}>
                    <p>{row["1"]["0"]}</p>
                  </TableCell>

                  <TableCell align="right">
                    {" "}
                    <p>{row["1"]["1"]["1. open"]}</p>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <p>{row["1"]["1"]["2. high"]}</p>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <p>{row["1"]["1"]["3. low"]}</p>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <p>{row["1"]["1"]["4. close"]}</p>
                  </TableCell>

                  <TableCell align="right">
                  <p>{row["1"]["1"]["5. volume"]}</p>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={filteredDates.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </span>
  );
}
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const BasicTable = (props) => {
  const [tableHeadings, setTableHeadings] = React.useState([]);
  const [tableData, setTableData] = React.useState([]);
  React.useEffect(() => {
    constructTableData(props.data);
  }, []);

  const constructTableData = (data) => {
    // constructing table Headings
    const headCells = [
      {
        id: "player",
        numeric: false,
        disablePadding: true,
        label: "Player Name",
      },
      {
        id: "team",
        numeric: false,
        disablePadding: true,
        label: "IPL Team",
      },
      {
        id: "tournament",
        numeric: false,
        disablePadding: true,
        label: "Tournament Played",
      },
      {
        id: "matches",
        numeric: false,
        disablePadding: true,
        label: "Matches",
      },
      {
        id: "runs",
        numeric: false,
        disablePadding: true,
        label: "Runs",
      },
      {
        id: "wickets",
        numeric: false,
        disablePadding: true,
        label: "Wickets",
      },
      {
        id: "catches",
        numeric: false,
        disablePadding: true,
        label: "Catches",
      },
      {
        id: "highestRuns",
        numeric: false,
        disablePadding: true,
        label: "Highest Runs",
      },
      {
        id: "fifties",
        numeric: false,
        disablePadding: true,
        label: "50's",
      },
      {
        id: "hundreds",
        numeric: false,
        disablePadding: true,
        label: "100's",
      },
    ];
    setTableHeadings(headCells);
    setTableData(data);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeadings.length > 0
              ? tableHeadings.map((item) => {
                  return <TableCell key={item.id}>{item.label}</TableCell>;
                })
              : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData && tableData.length > 0
            ? tableData.map((item) => {
                return (
                  <TableRow
                    key={item.player}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.player}
                    </TableCell>
                    <TableCell align="right">{item.team}</TableCell>
                    <TableCell align="right">{item.tournament}</TableCell>
                    <TableCell align="right">{item.matches}</TableCell>
                    <TableCell align="right">{item.runs}</TableCell>
                    <TableCell align="right">{item.wickets}</TableCell>
                    <TableCell align="right">{item.catches}</TableCell>
                    <TableCell align="right">{item.highestRuns}</TableCell>
                    <TableCell align="right">{item.fifties}</TableCell>
                    <TableCell align="right">{item.hundreds}</TableCell>
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;

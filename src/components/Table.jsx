import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "../data/MOCK_DATA.json";
import { COLUMNS } from "./colums_name";
import { makeStyles, Grid, Box, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles({
  table: {
    width: "60%",
    border: "none",
    margin: "0 auto",
    borderCollapse: "separate",
  },
  mainHeader: {
    paddingTop: "70px",
    marginBottom: "30px",
  },
  headers: {
    fontWeight: "bold",
    textAlign: "left",
    border: "none",
    padding: "10px 15px",
    background: "#EDEDED",
    fontSize: "14px",
    borderTop: "1px solid #ddd",
  },
  item: {
    textAlign: "left",
    border: "none",
    padding: "10px 15px",
    fontSize: "14px",
    verticalAlign: "top",
  },
  buttonTable: {
    width: "150px",
  },
  buttonGroup: {
    marginBottom: "10px",
  },
  tableTools: {
    width: "350px",
    backgroundColor: "#CCCCFF",
    borderRadius: "25px",
    padding: "20px",
    position: "fixed",
    top: "25%",
    right: 0,
  },
});

export const Table = () => {
  const classes = useStyles();
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageOptions,
    setPageSize,
    pageCount,
    state: { pageIndex, pageSize },
  } = tableInstance;
  return (
    <Grid container direction="row">
      <Grid item>
        <Box className={classes.mainHeader}>
          <Typography align="center" variant="h2" component="h2">
            React Table Database
          </Typography>
        </Box>
        <table {...getTableProps()} className={classes.table}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className={classes.headers}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className={classes.item}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Grid>
      <Grid item>
        <Grid
          className={classes.tableTools}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <ButtonGroup
            className={classes.buttonGroup}
            aria-label="contained primary button group"
            variant="contained"
            color="primary"
          >
            <Button className={classes.buttonTable} onClick={() => gotoPage(0)}>
              First Page
            </Button>
            <Button
              className={classes.buttonTable}
              onClick={() => gotoPage(pageCount - 1)}
            >
              Last Page
            </Button>
          </ButtonGroup>
          <ButtonGroup
            className={classes.buttonGroup}
            aria-label="contained primary button group"
            variant="contained"
            color="primary"
          >
            <Button
              className={classes.buttonTable}
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous Page
            </Button>
            <Button
              className={classes.buttonTable}
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next Page
            </Button>
          </ButtonGroup>
          <Box className={classes.buttonGroup}>
            Page {pageIndex + 1} of {pageOptions.length}
          </Box>
          <ButtonGroup
            className={classes.buttonGroup}
            aria-label="contained primary button group"
            variant="contained"
            color="primary"
          >
            <Button onClick={() => setPageSize(Number(10))}>10</Button>
            <Button onClick={() => setPageSize(Number(50))}>50</Button>
            <Button onClick={() => setPageSize(Number(100))}>100</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

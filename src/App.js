import { Table } from "./components/Table.jsx";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { Route, NavLink } from "react-router-dom";
import { Profile } from "./components/Profile";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "white",
  },
});

export const App = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <AppBar>
        <Toolbar>
          <Grid container justifyContent="space-around">
            <NavLink className={classes.link} to="/table">
              ReactTable
            </NavLink>
            <NavLink className={classes.link} to="/profile">
              Table Profiles
            </NavLink>
          </Grid>
        </Toolbar>
      </AppBar>
      <Route path="/table" component={Table} />
      <Route path="/profile" component={Profile} />
    </Grid>
  );
};

import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import MOCK_DATA from "../data/MOCK_DATA.json";
import { ProfileItem } from "./ProfileItem";
const useStyles = makeStyles({
  profilePhoto: {
    width: "200px",
  },
  profileContainer: {
    paddingTop: "70px",
  },
});
export const Profile = () => {
  console.log(MOCK_DATA[1]);
  const classes = useStyles();
  return (
    <div className={classes.profileContainer}>
      <Typography align="center" variant="h3" component="h3">
        Profiles
      </Typography>
      <Grid container justifyContent="space-between" direction="row">
        {MOCK_DATA.map((item) => (
          <ProfileItem
            name={item.first_name}
            lastName={item.last_name}
            email={item.email}
            gender={item.gender}
            country={item.country}
          />
        ))}
      </Grid>
    </div>
  );
};

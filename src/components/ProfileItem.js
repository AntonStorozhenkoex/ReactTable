import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  profilePhoto: {
    width: "120px",
    height: "120px",
  },
  profileItem: {
    paddingTop: "30px",
  },
});

export const ProfileItem = ({ name, lastName, country, gender, email }) => {
  const classes = useStyles();
  return (
    <Grid item xs={4} className={classes.profileItem}>
      <Grid container direction="row" alignItems="center">
        <span>
          <img
            className={classes.profilePhoto}
            src={
              gender === "Male"
                ? "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                : "https://icon-library.com/images/woman-icon-vector/woman-icon-vector-9.jpg"
            }
          />
        </span>
        <div>
          <Typography variant="h6" component="h6">
            Name:{name} {lastName}
          </Typography>
          <Typography variant="h6" component="h6">
            Gender:{gender}
          </Typography>
          <Typography variant="h6" component="h6">
            Country:{country}
          </Typography>
          <Typography variant="h6" component="h6">
            Email:{email}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

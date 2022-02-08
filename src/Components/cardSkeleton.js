import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "50%",
    height: 95,
    padding: 20,
    borderRadius: 30,
  },
  root: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    margin: "auto",
    justifyContent: "center",
  },
  typoStyling: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  "@media only screen and (max-width: 780px)": {
    paper: {
      width: "80%",
      height: "100%",
      padding: 20,
      borderRadius: 30,
    },
  },
}));
const CardsSkeleton = () => {
  const classes = useStyles();

  return (
    <>
      {[0, 1]?.map((item, index) => (
        <div className={classes.root} key={item}>
          <Paper elevation={3} className={classes.paper} key={item}>
            <div className={classes.typoStyling}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1">
                    <Skeleton width="60%" />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1">
                    <Skeleton width="60%" />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1">
                    <Skeleton width="60%" />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1">
                    <Skeleton width="60%" />
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </div>
      ))}
    </>
  );
};

export default CardsSkeleton;

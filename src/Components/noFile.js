import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import gitlogo from "../assets/png/gitlogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    marginBottom: 20,
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));
const NoData = ({ message }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <img src={gitlogo} alt="logo" height="200px" width="200px" />
        <br />
        <Typography variant="h5">{message}</Typography>
      </div>
    </>
  );
};

export default NoData;

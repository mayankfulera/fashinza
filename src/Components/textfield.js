import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles((theme) => ({
  textFieldStyling: {
    width: "40%",
  },
  searchIcon: {
    color: "grey",
  },
  closeIcon: {
    cursor: "pointer",
  },
  "@media only screen and (max-width: 780px)": {
    textFieldStyling: {
      width: "80%",
    },
  },
}));
const CustomTextField = ({ search, setSearch }) => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={classes.textFieldStyling}
        label="Search Organization Name"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              {!search ? <SearchIcon className={classes.searchIcon} /> : <CloseIcon className={classes.closeIcon} onClick={() => setSearch("")} />}
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <GitHubIcon />
            </InputAdornment>
          ),
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />{" "}
    </div>
  );
};

export default CustomTextField;

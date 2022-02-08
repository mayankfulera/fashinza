import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Hidden, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardsSkeleton from "./cardSkeleton";
import EllipsisText from "react-ellipsis-text";
import LinesEllipsis from "react-lines-ellipsis";
import ItemDialog from "./Dialogs/itemPopUp";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "50%",
    minHeight: 95,
    padding: 20,
    borderRadius: 30,
    cursor: "pointer",
    "&:hover": {
      background: "#F5F5F5",
    },
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
const GitReopCards = ({ data }) => {
  const classes = useStyles();
  const [localData, setLocalData] = useState([]);

  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const handleClickOpen = (item) => {
    setCurrentItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setLocalData(data?.slice(0, 10));
  }, [data]);

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    var arr = [...localData];
    setTimeout(() => {
      setLocalData(data?.slice(0, arr?.length + 10));
    }, 1500);
  };
  return (
    <>
      <InfiniteScroll dataLength={localData?.length} next={fetchMoreData} hasMore={localData?.length < data?.length ? true : false} loader={<CardsSkeleton />}>
        {localData?.map((item, index) => (
          <div className={classes.root} key={item?.full_name}>
            <Paper
              elevation={3}
              className={classes.paper}
              key={item?.full_name}
              onClick={() => {
                handleClickOpen(item);
              }}
            >
              <div className={classes.typoStyling}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1">
                      <strong>Full Name:</strong> <span>{item?.full_name}</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1">
                      <strong>Count of Open Issues:</strong> <span>{item?.open_issues_count}</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1">
                      <strong>url: </strong>
                    </Typography>
                    <a href={item?.url} target="blank">
                      <Hidden smUp>
                        {" "}
                        <EllipsisText text={item?.url} length={40} />
                      </Hidden>
                      <Hidden smDown>
                        <LinesEllipsis text={item?.url} maxLine="1" ellipsis="..." trimRight basedOn="letters" />
                      </Hidden>
                    </a>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1">
                      <strong>Languages Used:</strong> <span>{item?.language}</span>
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </div>
        ))}
      </InfiniteScroll>

      <ItemDialog open={open} handleClose={handleClose} currentItem={currentItem} />
    </>
  );
};

export default GitReopCards;

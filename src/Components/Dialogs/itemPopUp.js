import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Divider, Grid, Typography } from "@material-ui/core";
import { generateCsv } from "../../utility/generateCSV";

export default function ItemDialog({ open, handleClose, currentItem }) {
  const [permissions, setPermissions] = useState([]);
  useEffect(() => {
    if (currentItem) {
      var arr = [];
      Object.keys(currentItem?.permissions)?.forEach((item) => {
        if (currentItem?.permissions[item] === true) arr.push(item);
      });
      setPermissions(arr);
    }
  }, [currentItem]);

  const data = [
    {
      id: 0,
      heading: "Full Name",
      content: currentItem?.full_name,
    },
    {
      id: 1,
      heading: "Owner",
      content: currentItem?.owner?.login,
    },
    {
      id: 2,
      heading: "Type",
      content: currentItem?.owner?.type,
    },
    {
      id: 3,
      heading: "License Name",
      content: currentItem?.license?.name,
    },
    {
      id: 4,
      heading: "License Key",
      content: currentItem?.license?.key,
    },
    {
      id: 5,
      heading: "Permissions",
      content: generateCsv(permissions),
    },
  ];
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title" fullWidth maxWidth="md">
        <DialogTitle id="responsive-dialog-title">More Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {data?.map((item) => (
              <div key={item?.id} style={{ padding: 10 }}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>{item?.heading}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">{item?.content}</Typography>
                  </Grid>
                </Grid>{" "}
                <Divider style={{ marginTop: 10 }} />
              </div>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

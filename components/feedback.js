import MuiAlert from "@material-ui/lab/Alert";
import {
  Snackbar,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";

import { isEmptyObj } from "../../util";

export const Alert = ({ open, msg, severity, params }) => {
  const handleClose = () => {};

  const { lifetimeMS } = params;

  return (
    <Snackbar open={open} autoHideDuration={lifetimeMS} onClose={handleClose}>
      <MuiAlert elevation={3} variant="filled" severity={severity}>
        {msg}
      </MuiAlert>
    </Snackbar>
  );
};

const useStyles = makeStyles(theme => ({
  alertList: {
    display: "inline-flex",
    flexDirection: "column"
  }
}));

export const AlertList = ({ alerts }) => {
  const classes = useStyles();

  return (
    <Box className={classes.alertList}>
      {alerts.map(({ msg, severity }) => (
        <Alert open={true} msg={msg} severity={severity} />
      ))}
    </Box>
  );
};

export const Dialog = ({ open, title, content, actions }) => {
  return (
    <MuiDialog
      open={data && !isEmptyObj(data) === null}
      aria-labelledby={`alert-dialog-${title}`}
      aria-describedby={`alert-dialog-${title}`}
    >
      <DialogTitle id={`alert-dialog-${title}`}>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </MuiDialog>
  );
};

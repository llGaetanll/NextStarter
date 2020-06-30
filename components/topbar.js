import { Box, Paper, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  topbar: ({ orientation }) => ({
    display: "flex",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),

    borderTopLeftRadius: orientation === "top" ? 0 : theme.shape.borderRadius,
    borderTopRightRadius: orientation === "top" ? 0 : theme.shape.borderRadius,
    borderBottomLeftRadius:
      orientation !== "top" ? 0 : theme.shape.borderRadius,
    borderBottomRightRadius:
      orientation !== "top" ? 0 : theme.shape.borderRadius
  }),
  toolbar: {
    width: "100%"
  },
  divider: {
    display: "flex",
    flex: 1,
    maxWidth: 40
  }
}));

const Topbar = ({ orientation, ...props }) => {
  const classes = useStyles({ orientation });

  return (
    <Paper className={classes.topbar}>
      <Toolbar className={classes.toolbar}>
        <Typography>Logo</Typography>
        <Box className={classes.divider} />
        <Button>Option 1</Button>
        <Button>Option 2</Button>
      </Toolbar>
    </Paper>
  );
};

export default Topbar;

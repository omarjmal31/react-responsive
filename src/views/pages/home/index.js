import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import WidgetsIcon from '@material-ui/icons/Widgets';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import QrReader from 'react-qr-reader'

import Background from '../../../assets/background.jpg';
import AppIcon from '../../../logo.svg';

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: '30px !important',
    position: 'relative',
    backgroundColor: 'transparent',
    border: '1px solid #ced4da',
    color: 'white',
    fontSize: 16,
    padding: '15px 30px 15px 30px'
  },
}))(InputBase);

const dialogStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(dialogStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  }
}))(MuiDialogContent);

const useStyles = makeStyles({
  root: {
    height: "100%",
    backgroundColor: "black"
  },
  responsibleImg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    opacity: "0.3"
  },
  center: {
    width: 'unset',
    justifyContent: "center",
    height: "100vh"
  },
  footerContainer: {
    position: "relative",
    justifyContent: "center"
  },
  footer: {
    width: 'unset',
    position: "absolute",
    bottom: "50px"
  },
  link: {
    color: "#ff981a",
    textDecoration: "none"
  },
  white: {
    color: "white"
  },
  select: {
    borderRadius: "30px",
    backgroundColor: "transparent",
    marginBottom: "40px"
  },
  option: {
    color: "black",
  },
  loginDialog: {
    "& .MuiDialog-paper": {
      width: "400px"
    }
  },
  loginTitle: {
    color: "#0051ae",
    fontWeight: "bold"
  },
  loginItem: {
    width: "100%"
  },
  loginButton: {
    height: "56px",
    width: "100%",
    color: "white",
    backgroundColor: "#e78316 !important"
  },
  scanDialog: {
    "& .MuiDialog-paper": {
      width: "600px",
      height: "680px"
    }
  }
});

function Home(props) {
  const classes = useStyles();
  const [restaurant, setRestaurant] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [scan, setScan] = useState(false);

  const handleChange = (event) => {
    setRestaurant(event.target.value);
    props.history.push("/restaurant");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleScan = data => {
    if (data) {
      console.log('scan_data: ', data)
    }
  }
  const handleError = err => {
    console.error(err)
  }

  return (
    <div className={classes.root}>
      <img src={Background} className={classes.responsibleImg} alt="...background" />
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.center}
      >
        <img src={AppIcon} className="app-icon" alt="...appIcon" />
        <FormControl variant="outlined" className="select-restaurant">
          <Select
            native
            defaultValue={restaurant}
            value={restaurant}
            className={classes.select}
            onChange={handleChange}
            input={<BootstrapInput />}
          >

            <option value="" disabled>Select restaurant...</option>
            <option value="Grandiose Restaurant" className={classes.option}>Grandiose Restaurant</option>
            <option value="Sajna Restaurant" className={classes.option}>Sajna Restaurant</option>
            <option value="Star Kabab & Restaurant" className={classes.option}>Star Kabab & Restaurant</option>
            <option value="Saltz Fine Seafood" className={classes.option}>Saltz Fine Seafood</option>
            <option value="ABC Restaurant" className={classes.option}>ABC Restaurant</option>
          </Select>
        </FormControl>
        <Button
          className="scan-button"
          startIcon={<WidgetsIcon />}
          onClick={() => setScan(true)}
        >
          Scan QR Code
        </Button>
      </Grid>
      <Grid container className={classes.footerContainer}>
        <Grid item className={classes.footer}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Link to="/about-us" className={classes.link}>About US</Link>
            </Grid>
            <Grid item>
              <span className={classes.white}>|</span>
            </Grid>
            <Grid item>
              <Link className={classes.link} to="/" onClick={handleClickOpen}>Login</Link>
            </Grid>
            <Grid item>
              <span className={classes.white}>|</span>
            </Grid>
            <Grid item>
              <Link to="/signup" className={classes.link}>Signup</Link>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <p className={classes.white}>© 2020 <b>Six Menu</b>. All right reserved.</p>
          </Grid>
        </Grid>
      </Grid>
      <Dialog onClose={handleClose} className={classes.loginDialog} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography variant="h6" className={classes.loginTitle}>LOGIN</Typography>
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                variant="outlined"
                className={classes.loginItem}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                variant="outlined"
                className={classes.loginItem}
              />
            </Grid>
            <Grid item>
              <Button
                size="large"
                className={classes.loginButton}
                onClick={() => handleClose()}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Dialog onClose={() => setScan(false)} className={classes.scanDialog} aria-labelledby="customized-dialog-title" open={scan}>
        <DialogTitle id="customized-dialog-title" onClose={() => setScan(false)}>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography variant="h6" className={classes.loginTitle}>QR CODE SCANNER</Typography>
            </Grid>
            <Grid item>
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withRouter(Home);

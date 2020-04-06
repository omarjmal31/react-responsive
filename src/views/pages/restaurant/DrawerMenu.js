import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Drawer, IconButton, Slide, Typography } from '@material-ui/core';
import { ArrowUpward, ExpandMore } from '@material-ui/icons';
import TreeView from '@material-ui/lab/TreeView';
import Address from './components/Address';
import HoursOpening from './components/HoursOpening';
import Reservation from './components/Reservation';
import RestaurantLocation from './components/RestaurantLocation';
import ShareMenu from './components/ShareMenu';
import Reviews from './components/Reviews';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: '10px',
    width: '380px',
    '& .MuiTreeItem-iconContainer': {
      position: 'absolute',
      // right: '20px',
      marginLeft: "350px",
      marginRight: '0px',
    },
    '& li': {
      color: '#ddd',
      borderRadius: '8px',
      paddingLeft: '16px',
      paddingRight: '4px',
      marginBottom: '10px',
      paddingTop: '4px',
      paddingBottom: '4px',
    },
    '& li ul': {
      border: 'none',
      marginLeft: '0px',
      marginTop: '10px'
    },
    '& li ul li': {
      border: 'none',
      paddingLeft: '0px',
      marginBottom: '0px',
      padding: '0px'
    }
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  container: {
    position: 'relative',
    height: "calc(100vh - 250px)",
    background: "#06080A"
  },
  btnArrow: {
    marginTop: "-25px",
    background: "#06080A",
    height: "45px",
    '&:hover': {
      background: "#181e23"
    }
  },
  itemButton: {
    position: 'fixed',
    display: "flex",
    justifyContent: 'center',
    width: '100%'
  },
  treeView: {
    display: "grid",
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%'
  },
  callButton: {
    background: "#ff9800",
  },
  callButtonRtl: {
    background: "#ff9800",
    "& .MuiButton-startIcon": {
      marginRight: "0px"
    },
    "& .MuiSvgIcon-root": {
      marginLeft: "8px"
    }
  }
}));

const StyledDrawer = withStyles(theme => ({
  root: {

  },
  paper: {
    marginBottom: '50px',
    background: "#06080A",
    '& .MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label': {
      background: 'transparent'
    }
  },
}))(Drawer);

const DrawerMenu = props => {
  const classes = useStyles();
  const { state, toggleDrawer } = props;
  const { expanded, handleChange } = props;

  const sideList = side => (
    <div
      className={`${classes.fullList}`}
      role="presentation"
    >
      <Grid
        justify="center"
        alignItems="flex-start"
        className={classes.container}
      >
        <Slide direction="up" in={true} mountOnEnter>
          <Grid>
            <Grid item className={classes.itemButton}>
              <IconButton className={`${classes.btnArrow}`} color={'primary'} onClick={toggleDrawer('bottom', false)}><ArrowUpward color="white" /></IconButton>
            </Grid>
            <Grid item className={classes.treeView}>
              <Typography component={'div'} style={{width: '380px', color: '#ddd', padding: '20px', paddingTop: '40px', textAlign: 'center'}}>{'Lorem ipsum dolor sit amet, consectetur adipisicing dlit. Animi deserunt fugit tenetur.'}</Typography>
              <TreeView
                className={classes.root}
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ExpandMore />}
                expanded={expanded}
                onNodeToggle={handleChange}
              >
                <HoursOpening rtl={state.rtl} />
                <Address rtl={state.rtl} />
                <RestaurantLocation rtl={state.rtl} />
                <Reservation rtl={state.rtl} />
                <ShareMenu rtl={state.rtl} />
                <Reviews rtl={state.rtl} />
              </TreeView>
            </Grid>
            <Grid item className={classes.itemButton}>
              <Button variant="contained" color="primary" startIcon={<CallIcon />} className={state.rtl ? classes.callButtonRtl : classes.callButton}>Call Now</Button>
            </Grid>
          </Grid>
        </Slide>
      </Grid>
      
    </div>
  );

  return <StyledDrawer style={state.rtl ? {direction: 'rtl'} : {direction: 'ltr'}} anchor={'bottom'} open={state.bottom}>{sideList('bottom')}</StyledDrawer>;
};

export default DrawerMenu;

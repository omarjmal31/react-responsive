import React from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles, Grid, IconButton } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../../../assets/custom.css"
import Background from '../../../assets/background.jpg';
import DrawerMenu from './DrawerMenu';
import Avatar from '@material-ui/core/Avatar';
import Flag1 from '../../../assets/flag1.png';
import Flag2 from '../../../assets/flag2.png';
// import clsx from 'clsx';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  restaurant: {
    width: "100%",
    height: "100vh"
  },
  bottomBar: {
    height: "50px",
    position: "absolute",
    background: "#0E1215",
    bottom: "0",
    width: "100%",
    zIndex: 1301,
    borderTop: '1px solid #7b7a7a'
  },
  btnArrow: {
    marginTop: "-25px",
    background: "#0E1215",
    height: "45px",
    '&:hover': {
      background: "#181e23"
    }
  },
  showBtn: {
    display: 'none'
  },
  flagButton: {
    position: 'fixed',
    left: '30px',
    bottom: '-7px'
  },
  flagButtonRtl: {
    position: 'fixed',
    right: '30px',
    bottom: '-7px'
  }
}));

function Restaurant(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    rtl: false
  });

  const [selectedTab, setSelectedTab] = React.useState(0);
  const [expanded, setExpanded] = React.useState([]);
  
  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const handleChangeNode = (event, nodes) => {
    setExpanded(nodes);
  };

  return (
    <div className={classes.restaurant}>
      <Carousel swipeable={true} dynamicHeight={false} showThumbs={false} showStatus={false}>
        <div onClick={() => props.history.push("/detail")}>
          <img src={Background} alt={'FRIED ITEM'} />
          <p className="legend">FRIED ITEM</p>
        </div>
        <div>
          <img src={Background} alt={'FRIED ITEM'} />
          <p className="legend">FRIED ITEM</p>
        </div>
        <div>
          <img src={Background} alt={'FRIED ITEM'} />
          <p className="legend">FRIED ITEM</p>
        </div>
      </Carousel>
      <Grid container justify={'center'} className={classes.bottomBar} style={state.rtl ? {direction: 'rtl'} : {direction: 'ltr'}}>
        <IconButton className={`${classes.btnArrow} ${state.bottom === true ? classes.showBtn : '='}`} color={'primary'} onClick={toggleDrawer('bottom', true)}><ArrowUpward color="white" /></IconButton>
        <div className={state.rtl ? classes.flagButtonRtl : classes.flagButton}>
          <IconButton onClick={() => setState({ ...state, rtl: false })}><Avatar src={Flag1} /></IconButton>
          <IconButton onClick={() => setState({ ...state, rtl: true })}><Avatar src={Flag2} /></IconButton>
        </div>
      </Grid>
      
      <DrawerMenu state={state} toggleDrawer={toggleDrawer} expanded={expanded} setExpanded={setExpanded} handleChange={handleChangeNode}/>
      
    </div>
  );
}

export default withRouter(Restaurant);

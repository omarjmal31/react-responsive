import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../../assets/background.jpg';

const useStyles = makeStyles({
  root: {
    
  },
  responsibleImg: {
  	position: "absolute",
  	top: 0,
  	width:"100%",
  	height: "100%"
  }
});

function Home() {
	const classes = useStyles();
  return (
    <div className={classes.root}>
    	<img src={Background} className={classes.responsibleImg}/>
      Home
    </div>
  );
}

export default Home;

import React from 'react';
import { makeStyles } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../../../assets/custom.css"
import Background from '../../../assets/background.jpg';

const useStyles = makeStyles((theme) => ({
  restaurant: {
    width: "100%",
    height: "100vh"
  }
}));

function Restaurant() {
  const classes = useStyles();
  return (
    <div className={classes.restaurant}>
      <Carousel swipeable={true} dynamicHeight={false} showThumbs={false} showStatus={false}>
        <div>
          <img src={Background} alt={'FRIED ITEM'}/>
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
    </div>
  );
}

export default Restaurant;

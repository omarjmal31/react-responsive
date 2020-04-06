import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Call from '../../../../../assets/call.svg';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    textAlign:"center",
    borderRadius:10,
    '&:hover': {
        background: "#1266d2",
        filter: "invert(100%)",
      },
      boxShadow: "none",
  },

  svg: {
      fill: "yellow",
      '&:hover': {
        fill: "#ed992d",
      },
  },
  cardName: {
      fontSize: 18,
      padding: 10,
      fontWeight: "bold",
  },
  cardDescription: {
      fontSize: 18,
      padding: 10,
  }
});

export default function ResposiveCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <img className={classes.svg}
            src={Call}
            alt="phone with svg"
            height="40"
            width="40"/>
        <Typography className={classes.cardName} gutterBottom>
          Fully Responsive
        </Typography>
        <Typography className={classes.check} gutterBottom>
          Lorem ipsum dolor sit amet, consectetur 
          <br/>
          adipisicing elit Aut iusto
        </Typography>
      </CardContent>
    </Card>
  );
}

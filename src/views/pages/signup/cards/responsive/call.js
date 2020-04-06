import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { ReactComponent as Call} from '../../../../../assets/call.svg';

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxHeight: 250,
    textAlign:"center",
    borderRadius:10,
    '&:hover': {
        background: "#ed992d",
        '& svg':{
          fill:"#ffffff",
        },
        '& p':{
          color:"#ffffff",
        }        
      },
      boxShadow: "none",
  },

  svg: {
      fill: "#ed992d",
      width: 40,
      height: 40,
      margin: 10,
      '&:hover': {
        fill: "#000000",
      },
  },
  cardName: {
      fontSize: 18,
      padding: 10,      
      fontFamily: "fantasy",
  },
  cardDescription: {
      fontSize: 18,
      padding: 10,
  }

});

export default function CallCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Call className={classes.svg}/>
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

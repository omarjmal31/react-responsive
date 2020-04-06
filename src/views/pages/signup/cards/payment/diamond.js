import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 320,
    textAlign:"center",
    borderRadius:20,
  },
  membershipName:{
    fontFamily:"fantasy",
  },
  check: {
    fontSize: 18,
    padding: 10
  },
  cross: {
    fontSize: 18,
    padding: 10,
    textDecoration:"line-through",
  },
  membership: {
    marginTop: "-19px",
    padding:30,
    height: 110,
    background: "black",
    color:"grey",
  },
  membershipPrice:{
    color:"white",
  },
  button: {
    width:220,
    height:40,
    background:"#ed992d",
    '&:hover': {
      background: "#d17600",
    },
    fontSize:14,
    borderRadius:10,
    color:"white",
  },
  textMonth: {
    fontSize:18,
  },
  memebershipDescription:{
    paddingTop: 40,
  }
});

export default function DiamondCard() {
  const classes = useStyles();
  const check = <span className={classes.check}>✔</span>;
  const cross = <span className={classes.check}>✖</span>;
  return (
    <Card className={classes.root}>
      <div className={classes.membership}>
        <h4 className={classes.membershipName}>DIAMOND</h4>
        <h1 className={classes.membershipPrice}>69<span className={classes.textMonth}>/ Month</span></h1>
      </div>
      <CardContent className={classes.memebershipDescription}>
        <Typography  gutterBottom>
          {check}<span className={classes.check}>Lorem ipsum dolor sit.</span>
        </Typography>
        <Typography  gutterBottom>
          {check}<span className={classes.check}>Lorem ipsum dolor sit.</span>
        </Typography>
        <Typography  gutterBottom>
          {check}<span className={classes.check}>Lorem ipsum dolor sit.</span>
        </Typography>
        <Typography  gutterBottom>
          {check}<span className={classes.check}>Lorem ipsum dolor sit.</span>
        </Typography>
      </CardContent>
      <CardContent>
        <Button className={classes.button}>Get Started</Button>
      </CardContent>
    </Card>
  );
}

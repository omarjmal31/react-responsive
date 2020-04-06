import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    textAlign:"center",
    borderRadius:20,
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
  pos: {
    marginBottom: 12,
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
});

export default function PaymentCard() {
  const classes = useStyles();
  const check = <span className={classes.check}>✔</span>;
  const cross = <span className={classes.check}>✖</span>;
  return (
    <Card className={classes.root}>
      <div className={classes.membership}>
        <h3>Basic</h3>
        <h1 className={classes.membershipPrice}>Free</h1>
      </div>
      <CardContent>
        <Typography className={classes.check} gutterBottom>
          {check}Lorem ipsum dolor sit.
        </Typography>
        <Typography className={classes.check} gutterBottom>
          {check}Lorem ipsum dolor sit.
        </Typography>
        <Typography className={classes.cross} gutterBottom>
          {cross}Lorem ipsum dolor sit.
        </Typography>
        <Typography className={classes.cross} gutterBottom>
          {cross}Lorem ipsum dolor sit.
        </Typography>
      </CardContent>
      <CardContent>
        <Button className={classes.button}>Get Started</Button>
      </CardContent>
    </Card>
  );
}

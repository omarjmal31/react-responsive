import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Background from '../../../assets/background.jpg';
import Logo from '../../../assets/logo.svg';
import PaymentCard from './cards/payment'
import ResposiveCard from './cards/responsive'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 1000,
    textAlign: "center",
    '& .MuiGrid-spacing-xs-6': {
      width: 'unset',
      marginRight: '0px'
    },
    '& p': {
      marginBottom: '20px'
    }
  },

  imageDiv: {
    background: 'black',
    height: 300
  },

  responsibleImg: {
    objectFit: "cover",
    position: "relative",
    width: "100%",
    height: 300,
    opacity: 0.7
  },

  middle: {
    transition: .5,
    opacity: 1,
    position: "relative",

    marginTop: -300,
    // textAlign:"center",
  },

  text: {
    color: "white",
    fontSize: 30,
    marginTop: -40,
    fontFamily: "fantasy",
  },

  cardContainer: {
    marginTop: 17
  },

  membershipDescription: {
    textAlign: "center",
    padding: 50,
  },

  membershipSubDescription: {
    margin: 0,
  },

  bullet: {
    fontSize: 20,
    padding: 8
  },

  divider: {
    marginTop: 50,
  },

  link: {
    color: "#ed992d",
    textDecoration: "none",
  }
});


function SignUp() {
  const [spacing, setSpacing] = React.useState(6);
  const classes = useStyles();
  const bullet = <span className={classes.bullet}>•</span>;
  const copyright = <span className={classes.check}>© 2020 <a className={classes.link} href="http://localhost:3000">SixMenu</a>
                    . All right reserved.
                    </span>;
  return (
    <div className={classes.root}>
      <div className={classes.imageDiv}>
        <img src={Background} className={classes.responsibleImg} />
        <div className={classes.middle}>
          <img className={classes.svg}
            src={Logo}
            alt="phone with svg"
            height="220"
            width="220" />
          <div className={classes.text}>Restaurant in Israel</div>
        </div>
      </div>
      <Grid container spacing={6} className={classes.cardContainer}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <PaymentCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.membershipDescription}>
        <h2>All plans also include these benefits:</h2>
        <p className={classes.membershipSubDescription}>{bullet}Lorem ipsum dolor sit amet, consectetur.</p>
        <p className={classes.membershipSubDescription}>{bullet}Lorem ipsum dolor sit amet, consectetur.</p>
        <p className={classes.membershipSubDescription}>{bullet}Lorem ipsum dolor sit amet, consectetur.</p>
        <p className={classes.membershipSubDescription}>{bullet}Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
      <Grid container spacing={6} className={classes.cardContainer}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <ResposiveCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <div>
        <p>{copyright}</p>
      </div>
    </div>
  );
}

export default SignUp;


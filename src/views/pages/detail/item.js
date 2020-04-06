import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import StrawBerry from '../../../assets/strawberry.png';
import Bread from '../../../assets/bread.png';
import Mint from '../../../assets/mint.png';
import Pepper from '../../../assets/pepper.png';

const useStyles = makeStyles((theme) => ({
    itemContent: {
        background: '#202020',
        width: '100%',
        padding: '10px',
        textAlign: 'left',
        marginBottom: '20px',
        position: 'relative',
        paddingBottom: '20px'
    },
    avatarContent: {
        width: '100%',
    },
    descriptionContent: {
        paddingLeft: '10px',
        paddingRight: '10px',
        width: '100%',
    },
    avatarImg: {
        width: '100% !important',
        height: '100% !important'
    },
    imgItemContent: {
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemImg: {
        width: '23% !important',
        height: '100% !important',
        marginLeft: '5px'
    }
}));

const Item = props => {
    const {handleClick} = props;
    const classes = useStyles();

    return (
        <Grid container className={classes.itemContent} onClick={handleClick}>
            <Grid item className={classes.avatarContent} xs={3}>
                <img src={StrawBerry} className={classes.avatarImg} alt="StrawBerry" />
            </Grid>
            <Grid item className={classes.descriptionContent} xs={9}>
                <Typography component={'div'} style={{ color: 'white', fontWeight: '600' }}>
                    {'Chicken Fry'}
                </Typography>
                <Typography component={'div'} style={{ color: 'white', fontSize: '12px' }}>
                    {'Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate.'}
                </Typography>
                {/* For Mobile */}
                {/* <Typography component={'div'} style={{ color: '#EA9C32', marginTop: '10px' }}> */}
                {/* For Desktop */}
                <Typography component={'div'} style={{ color: '#EA9C32', position: 'absolute', bottom: '20px'}}>
                    {'$ 80.00'}
                </Typography>
            </Grid>
            <Grid item className={classes.imgItemContent}>
                <img src={Bread} className={classes.itemImg} />
                <img src={Mint} className={classes.itemImg} />
                <img src={Pepper} className={classes.itemImg} />
            </Grid>
        </Grid>
    );
}

export default Item;
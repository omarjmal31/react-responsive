import React from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles, Grid, IconButton, Typography } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../../../assets/custom.css"
import Background from '../../../assets/background.jpg';
import Item from './item';
import LogoIcon from '../../../logo.svg';
import DetailDialog from './DetailDialog'

const useStyles = makeStyles((theme) => ({
    restaurant: {
        width: "100%",
        height: "100vh",
        '& 	.MuiSvgIcon-colorPrimary': {
            color: 'rgb(234, 156, 50)'
        }
    },
    backIcon: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: '10'
    },
    itemMobileContent: {
        background: '#202020',
        width: '100%',
        padding: '10px',
        textAlign: 'left',
        marginBottom: '20px'
    },
    itemContent: {
        background: '#202020',
        width: '45%',
        padding: '10px',
        textAlign: 'left',
        marginBottom: '20px'
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
    bottomBar: {
        height: "50px",
        position: "absolute",
        background: "#0E1215",
        bottom: "0",
        width: "100%",
        zIndex: 5,
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
    itemsDiv: {
        position: 'absolute',
        top: 0,
        background: 'transparent',
        height: 'calc(100vh - 100px)',
        // width: '40%', 
        paddingTop: '20px',
        paddingBottom: '20px',
        overflow: 'auto',
        marginTop: '60px',
        '&::-webkit-scrollbar': {
            height: '8px',
            width: '0px'
        },
        '&::-webkit-scrollbar-track-piece': {
            background: '#F0F0F0',
        },
        '&::-webkit-scrollbar-thumb': 'vertical',
        '&::-webkit-scrollbar-thumb:horizontal': {
            background: '#E5E5E5',
            borderRadius: "20px"
        }
    },
    title: {
        fontSize: '32px',
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '10px'
    },
    logoImg: {
        position: 'fixed',
        width: '50% !important',
        top: '-8px',
        left: '25%',
        height: '10% !important',
        zIndex: '5'
    }
}));

function RestaurantDetail(props) {
    const classes = useStyles();
    const [widthStatus, setWidthStatus] = React.useState('desktop');
    const [open, setOpen] = React.useState(false);

    const list = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 }
    ];

    const handleClose = () => {
        setOpen(!open);
    };

    React.useEffect(() => {
        var width = window.innerWidth;
        console.log('widthStatus: ', width)
        if (width < 720) {
            setWidthStatus('mobile')
        } else {
            setWidthStatus('desktop')
        }
    }, []);

    React.useEffect(() => {
        var width = window.innerWidth;
        console.log('widthStatus: ', width)
        if (width < 720) {
            setWidthStatus('mobile')
        } else {
            setWidthStatus('desktop')
        }
    }, [widthStatus]);

    return (
        <div className={classes.restaurant}>
            <IconButton className={classes.backIcon} onClick={() => props.history.goBack()}><ArrowBackIos color={'primary'} /></IconButton>
            <div style={{ position: 'relative' }}>
                <img src={LogoIcon} className={classes.logoImg} />
            </div>
            <Carousel swipeable={true} dynamicHeight={false} showThumbs={false} showStatus={false}>
                <div style={{ position: 'relative', top: 0, background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Background} alt={'FRIED ITEM'} />
                    <div className={classes.itemsDiv} style={widthStatus === 'desktop' ? { width: '40%' } : { width: '85%' }}>
                        <img src={LogoIcon} className={classes.logoImg} />
                        <Typography component={'div'} className={classes.title}>FRIED ITEM</Typography>
                        {
                            list.map(() => {
                                return (
                                    <Item handleClick={handleClose} />
                                )
                            })
                        }
                    </div>
                </div>
                <div style={{ position: 'relative', top: 0, background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Background} alt={'FRIED ITEM'} />
                    <div className={classes.itemsDiv} style={widthStatus === 'desktop' ? { width: '40%' } : { width: '85%' }}>
                        <Typography component={'div'} className={classes.title}>FRIED ITEM</Typography>
                        {
                            list.map(() => {
                                return (
                                    <Item />
                                )
                            })
                        }
                    </div>
                </div>
                <div style={{ position: 'relative', top: 0, background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Background} alt={'FRIED ITEM'} />
                    <div className={classes.itemsDiv} style={widthStatus === 'desktop' ? { width: '40%' } : { width: '85%' }}>
                        <img src={LogoIcon} className={classes.logoImg} />
                        <Typography component={'div'} className={classes.title}>FRIED ITEM</Typography>
                        {
                            list.map(() => {
                                return (
                                    <Item />
                                )
                            })
                        }
                    </div>
                </div>
            </Carousel>
            <DetailDialog open={open} handleClose={handleClose} />
        </div>
    );
}

export default withRouter(RestaurantDetail);

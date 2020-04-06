import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Background from '../../../assets/background.jpg';
import Bread from '../../../assets/bread.png';
import Mint from '../../../assets/mint.png';
import Pepper from '../../../assets/pepper.png';

const useStyles = makeStyles(() => ({
    detailDialog: {
        '& .MuiDialog-paperWidthSm': {
            maxWidth: '60%',
            background: '#111'
        },
        '& .carousel .slide img, & .carousel.carousel-slider': {
            height: '400px'
        }
    },
    mainContent: {
        padding: '20px'
    },
    title: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#ffffff'
    },
    price: {
        fontSize: '18px',
        color: 'rgb(234, 156, 50)',
        position: 'relative'
    },
    itemImg: {
        width: '20.5% !important',
        height: '100% !important',
        marginLeft: '5px'
    },
    imgContent: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        textAlign: 'right'
    },
    description: {
        marginTop: '20px',
        fontSize: '16px',
        color: '#5f5b5b'
    }
}));

const dialogStyles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(dialogStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    }
}))(MuiDialogContent);

const DetailDialog = props => {
    const { open, handleClose } = props;
    const classes = useStyles();

    return (
        <Dialog onClose={handleClose} className={classes.detailDialog} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            </DialogTitle>
            <DialogContent>
                <Grid contaniner>
                    <Carousel swipeable={true} dynamicHeight={false} showThumbs={false} showStatus={false}>
                        <div>
                            <img src={Background} alt={'FRIED ITEM'} />
                        </div>
                        <div>
                            <img src={Background} alt={'FRIED ITEM'} />
                        </div>
                    </Carousel>
                    <Grid item className={classes.mainContent}>
                        <Typography component={'div'} className={classes.title}>Chicken Fry</Typography>
                        <Typography component={'div'} className={classes.price}>
                            {'$ 80.00'}
                            <div className={classes.imgContent}>
                                <img src={Bread} className={classes.itemImg} />
                                <img src={Mint} className={classes.itemImg} />
                                <img src={Pepper} className={classes.itemImg} />
                            </div>
                        </Typography>
                        <Typography component={'div'} className={classes.description}>
                            {'Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit cupiditate.'}
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default DetailDialog;
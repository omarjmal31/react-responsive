import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { Typography, makeStyles, Input, TextField, Button } from '@material-ui/core';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

const useStyles = makeStyles(theme => ({
    firstItem: {
        color: '#ddd',
        fontSize: '12px'
    },
    secondItem: {
        marginLeft: '50px',
        color: '#ddd',
        fontSize: '12px'
    },
    yellowTxt: {
        marginLeft: '50px',
        color: 'yellow',
        fontSize: '12px'
    },
    reservationIcon: {
        marginRight: theme.spacing(1),
        border: '1px solid darkgrey',
        borderRadius: 30,
        padding: 5,
        width: 17,
        height: 17,
    },
    reservationIconRtl: {
        marginLeft: theme.spacing(1),
        border: '1px solid darkgrey',
        borderRadius: 30,
        padding: 5,
        width: 17,
        height: 17,
    },
    label: {
        position: "absolute",
        top: 3,
    },
    input: {
        background: 'black',
        border: '1px solid darkgrey',
        borderRadius: 6,
        width: 350,
        height: 30,
        color: 'darkgrey',
        fontSize: 15,
        paddingLeft: 10,
        marginBottom: 16,
    },
    textField: {
        background: 'black',
        border: '1px solid darkgrey',
        borderRadius: 6,
        width: 350,
        height: 90,
        color: 'darkgrey',
        fontSize: 15,
        paddingLeft: 10,
        paddingTop: 5,
        marginBottom: 16,
    },
    sendButton: {
        background: "#ff9800",
        float: 'right',
    },
    treeItemRtl: {
        "& .MuiTreeItem-iconContainer .MuiSvgIcon-root": {
            right: "350px",
            top: "-12px",
            position: "absolute"
        }
    }
}));

const Reservation = props => {
    const classes = useStyles();
    const { rtl } = props;

    return (
        <TreeItem nodeId="14" className={rtl ? classes.treeItemRtl : ""} label={
            <div className={classes.labelRoot}>
                <NearMeOutlinedIcon className={rtl ? classes.reservationIconRtl: classes.reservationIcon} />
                <span className={classes.label}>{'Reservation'}</span>
            </div>
        }>
            <TreeItem
                nodeId="15"
                label={
                    <Typography component="div">
                        <input className={classes.input} placeholder="name" />
                    </Typography>
                }
            />
            <TreeItem
                nodeId="16"
                label={
                    <Typography component="div">
                        <input className={classes.input} placeholder="Email" />
                    </Typography>
                }
            />
            <TreeItem
                nodeId="17"
                label={
                    <Typography component="div">
                        <input className={classes.input} placeholder="Phone no." />
                    </Typography>
                }
            />
            <TreeItem
                nodeId="18"
                label={
                    <Typography component="div">
                        <textarea className={classes.textField} placeholder="Your message"/>
                    </Typography>
                }
            />
            <TreeItem
                nodeId="19"
                label={
                    <Typography component="div">
                        <Button variant="contained" color="primary" className={classes.sendButton}>Send Message</Button>
                    </Typography>
                }
            />
        </TreeItem>
    );
};

export default Reservation;

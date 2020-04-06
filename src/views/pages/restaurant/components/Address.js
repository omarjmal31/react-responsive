import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { Typography, makeStyles } from '@material-ui/core';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

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
    addressIcon: {
        marginRight: theme.spacing(1),
        border: '1px solid darkgrey',
        borderRadius: 30,
        padding: 5,
        width: 17,
        height: 17,
    },
    label: {
        position: "absolute",
        top: 3,
    }
}));

const Address = props => {
    const classes = useStyles();

    return (
        <TreeItem nodeId="9" label={
            <div className={classes.labelRoot}>
                <RoomOutlinedIcon className={classes.addressIcon}/>
                <span className={classes.label}>{'Address'}</span>
            </div>
            }>
            <TreeItem
                nodeId="10"
                label={
                    <Typography component="div">
                        <Typography component="span" className={classes.firstItem}>{'7432 Harrison Road'}</Typography>
                    </Typography>
                }
            />
            <TreeItem
                nodeId="11"
                label={
                    <Typography component="div">
                        <Typography component="span" className={classes.firstItem}>{'Muskego, WI 53150'}</Typography>
                    </Typography>
                }
            />
        </TreeItem>
    );
};

export default Address;

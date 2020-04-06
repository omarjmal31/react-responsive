import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { Typography, makeStyles } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';


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
    timeIcon: {
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

const HoursOpening = props => {
    const classes = useStyles();

    return (
        <TreeItem nodeId="1" label={
            <div className={classes.labelRoot}>
                <AccessTimeIcon className={classes.timeIcon}/>
                <span className={classes.label}>{'Hours Opening'}</span>
            </div>
        }>
            <TreeItem
                nodeId="2"
                label={
                    <Typography component="div">
                        <Typography component="span" className={classes.firstItem}>{'Sunday'}</Typography>
                        <Typography component="span" className={classes.secondItem}>{': 8AM-12AM'}</Typography>
                    </Typography>
                }
            />
            <TreeItem
                nodeId="3"
                label={
                    <Typography component="div">
                        <Typography component="span" className={classes.firstItem}>{'Monday'}</Typography>
                        <Typography component="span" className={classes.yellowTxt}>{': Close'}</Typography>
                    </Typography>
                }
            />
            <TreeItem
                nodeId="4"
                label={
                    <Typography component="div">
                        <Typography component="span" className={classes.firstItem}>{'Tuesday'}</Typography>
                        <Typography component="span" className={classes.secondItem}>{': 8AM-12AM'}</Typography>
                    </Typography>
                }
            />
            <TreeItem
                nodeId="5"
                label={
                    <Typography component="div">
                        <Typography component="span" className={classes.firstItem}>{'Wednesday'}</Typography>
                        <Typography component="span" className={classes.secondItem}>{': 8AM-12AM'}</Typography>
                    </Typography>
                }
            />
            <TreeItem
                nodeId="6"
                label={
                    <Typography component="div">
                        <Typography component="span" className={classes.firstItem}>{'Thursday'}</Typography>
                        <Typography component="span" className={classes.secondItem}>{': 8AM-12AM'}</Typography>
                    </Typography>
                }
            />
            <TreeItem
                nodeId="7"
                label={
                    <Typography component="div">
                        <Typography component="span" className={classes.firstItem}>{'Friday'}</Typography>
                        <Typography component="span" className={classes.secondItem}>{': 8AM-12AM'}</Typography>
                    </Typography>
                }
            />
            <TreeItem
                nodeId="8"
                label={
                    <Typography component="div">
                        <Typography component="span" className={classes.firstItem}>{'Saturday'}</Typography>
                        <Typography component="span" className={classes.secondItem}>{': 8AM-12AM'}</Typography>
                    </Typography>
                }
            />
        </TreeItem>
    );
};

export default HoursOpening;

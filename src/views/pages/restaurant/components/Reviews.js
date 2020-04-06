import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { Typography, makeStyles, Button } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Rating from 'material-ui-rating'

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
    reviewIcon: {
        marginRight: theme.spacing(1),
        border: '1px solid darkgrey',
        borderRadius: 30,
        padding: 5,
        width: 17,
        height: 17,
    },
    reviewIconRtl: {
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

const Reviews = props => {
    const classes = useStyles();
    const { rtl } = props;

    return (
        <TreeItem nodeId="22" className={rtl ? classes.treeItemRtl : ""} label={
            <div className={classes.labelRoot}>
                <StarBorderOutlinedIcon className={rtl ? classes.reviewIconRtl : classes.reviewIcon} />
                <span className={classes.label}>{'Reviews'}</span>
            </div>
        }>
            <TreeItem
                nodeId="23"
                label={
                    <Typography component="div">
                        <Rating
                            value={4}
                            max={5}
                        />
                    </Typography>
                }
            />
            <TreeItem
                nodeId="24"
                label={
                    <Typography component="div">
                        <Typography component="div">
                            <textarea className={classes.textField} placeholder="Your comment" />
                        </Typography>
                    </Typography>
                }
            />
            <TreeItem
                nodeId="25"
                label={
                    <Typography component="div">
                        <Typography component="div">
                            <Button variant="contained" color="primary" className={classes.sendButton}>Submit Review</Button>
                        </Typography>
                    </Typography>
                }
            />
        </TreeItem>
    );
};

export default Reviews;

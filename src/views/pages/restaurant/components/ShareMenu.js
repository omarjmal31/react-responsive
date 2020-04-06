import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { Typography, makeStyles, IconButton } from '@material-ui/core';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import PregnantWomanOutlinedIcon from '@material-ui/icons/PregnantWomanOutlined';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';
import AssistantOutlinedIcon from '@material-ui/icons/AssistantOutlined';

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
    shareIcon: {
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
    },
    mailIcon: {
        background: 'darkgrey',
        color: 'white',
        borderRadius: 5,
        padding: 8,
        marginRight: 10,
    },
    twitterIcon: {
        background: '#64b5f6',
        color: 'white',
        borderRadius: 5,
        padding: 8,
        marginRight: 10,
    },
    personIcon: {
        background: '#303f9f',
        color: 'white',
        borderRadius: 5,
        padding: 8,
        marginRight: 10,
    },
    callIcon: {
        background: '#4caf50',
        color: 'white',
        borderRadius: 5,
        padding: 8,
        marginRight: 10,
    },
    lightIcon: {
        background: '#2196f3',
        color: 'white',
        borderRadius: 5,
        padding: 8,
        marginRight: 10,
    },

}));

const ShareMenu = props => {
    const classes = useStyles();

    return (
        <TreeItem nodeId="20" label={
            <div className={classes.labelRoot}>
                <ShareOutlinedIcon className={classes.shareIcon}/>
                <span className={classes.label}>{'ShareMenu'}</span>
            </div>
            }>
            <TreeItem
                nodeId="21"
                label={
                    <Typography component="div">
                        <IconButton className={classes.personIcon}><PregnantWomanOutlinedIcon /></IconButton>
                        <IconButton className={classes.twitterIcon}><TwitterIcon /></IconButton>
                        <IconButton className={classes.lightIcon}><AssistantOutlinedIcon /></IconButton>
                        <IconButton className={classes.callIcon}><PermPhoneMsgOutlinedIcon /></IconButton>
                        <IconButton className={classes.mailIcon}><MailOutlinedIcon /></IconButton>
                    </Typography>
                }
            />
        </TreeItem>
    );
};

export default ShareMenu;

import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { Typography, makeStyles } from '@material-ui/core';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps"

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
    mapIcon: {
        marginRight: theme.spacing(1),
        border: '1px solid darkgrey',
        borderRadius: 30,
        padding: 5,
        width: 17,
        height: 17,
    },
    mapIconRtl: {
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
    treeItemRtl: {
        "& .MuiTreeItem-iconContainer .MuiSvgIcon-root": {
            right: "350px",
            top: "-12px",
            position: "absolute"
        }
    }
}));

const RestaurantLocation = props => {
    const { rtl } = props;

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
            defaultOptions={{
                scrollwheel: false
            }}
        >
            <Marker
                position={{ lat: -34.397, lng: 150.644 }}
            />
        </GoogleMap>
    ));
    const classes = useStyles();
    return (
        <TreeItem nodeId="12" className={rtl ? classes.treeItemRtl : ""} label={
            <div className={classes.labelRoot}>
                <MapOutlinedIcon className={rtl ? classes.mapIconRtl : classes.mapIcon} />
                <span className={classes.label}>{'RestaurantLocation'}</span>
            </div>
        }>
            <TreeItem
                nodeId="13"
                label={
                    <Typography component="div">
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOr9KBA_h8BsRP8ylFCDy99SIupT3gl6o"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px`, direction: `ltr` }} />}
                            mapElement={<div style={{ height: `100%`, direction: `ltr` }} />}
                        >
                            <div>University of San Francisco</div>
                        </MapWithAMarker>
                    </Typography>
                }
            />
        </TreeItem>
    );
};

export default RestaurantLocation;

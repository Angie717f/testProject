import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { onhandlerMap, selectMapBlock } from "../../../redux/slice/map/mapSlice";
import MapBlock from "../../mapBlock/MapBlock";
import './MapLocation.css';


const MapLocation = () => {

  const dispatch = useDispatch();
  const {handlerMap} = useSelector(selectMapBlock)

  const opneMap = () => {
    dispatch(onhandlerMap());
  }

  return (
    <>
    <div className="map-location">
      <input placeholder="Enter your address" />
      <div className="map-btn" onClick={opneMap}>
        <CiLocationOn />
        <span> Open Map </span>
      </div>
    </div>
      {handlerMap && <MapBlock opneMap={opneMap} />}
    </>
  );
};

export default MapLocation;

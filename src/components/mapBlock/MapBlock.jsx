import React from "react";
import InMap from "./InMap";
import SearchMap from "./SearchMap";
import {GrClose} from 'react-icons/gr'
import "./MapBlock.css";


const MapBlock = ({ opneMap }) => {

  return (
    <div className="map-block" onClick={opneMap}>
      <div className="map" onClick={(e) => e.stopPropagation()}>
        <div>
          <div className="map-header">
            <h1>Specify your address to suggest you the FASTEST DELIVERY</h1>
            <GrClose onClick={opneMap} />
          </div>
            <SearchMap />
            <InMap />
        </div>
      </div>
    </div>
  );
};

export default MapBlock;

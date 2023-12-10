import React from 'react';
import { useState,useEffect} from 'react';
import '../App.css';
import './Map.css';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Totkmap from '../Images/Totkmap.png';
//import images below:
import totkimg11 from '../Images/totkimg11.jpg';
import mongo from '../Images/Mongolia.jpeg';
import totkimg12 from '../Images/totkimg12.jpg';
import bryce from '../Images/Bryce.jpg';
import totkimg13 from '../Images/totkimg13.jpg';
import baobab from '../Images/Baobab.jpg';
import totkimg14 from '../Images/totkimg14.jpg';
import tree from '../Images/tree.jpeg';
import totkimg15 from '../Images/totkimg15.jpeg';
import canyon from '../Images/canyon.jpeg';

function Map(){
    delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    
});
const imageBounds = [[0, 0], [100, 200]]; // Use the calculated boundsWidth here
const center = [(imageBounds[0][0] + imageBounds[1][0]) / 2, (imageBounds[0][1] + imageBounds[1][1]) / 2];
const [selectedLocation, setSelectedLocation] = useState(null);

const locations = {
    hyrulefield: {
        name: 'Hyrule Field',
        image1: totkimg11, 
        image2: mongo,
        realloc:'Temporate Grasslands',
        description: 'The climate and terrain here is similar to the temporate grasslands, such as the Mongolian-Manchurian steppe crossing over China, Mongolia, and Russia.'
    },
    gerudo:{
        name:'Gerudo Highlands',
        image1:totkimg12,
        image2:bryce,
        realloc:'Bryce National Park, UT, USA',
        description:'The terrain of Gerudo Highlands looks very similar to the terrain of Bryce National Park in Utah, the US.',
    },
    taobab:{
        name:'Taobab Grasslands',
        image1:totkimg13,
        image2:baobab,
        realloc:'Baobab trees in Madagascar',
        description:'The trees on taobab Grasslands are inspired by Baobob trees in Madagascar.',
    },
    seres:{
        name:'Seres Scablands',
        image1:totkimg14,
        image2:tree,
        realloc:'Dragon blood trees in Yemen',
        description:'Those "mushroom" trees scattered in Seres Scablands resemble the dragon blood trees on the islands of Socotra, in Yemen.',
    },
    canyon:{
        name:'Karusa Valley',
        image1:totkimg15,
        image2:canyon,
        realloc:'Antelope Canyon in AZ, US',
        description:'The vally deep in the Gerudo region resembles the Antelope Canyon in Arizona, US.',
    },
}
const handleMarkerClick = (locationKey) => {
    if (selectedLocation && selectedLocation.name === locations[locationKey].name) {
        // If the current location is already selected, set it to null to hide the details
        setSelectedLocation(null);
    } else {
        // Otherwise, set the selected location to the one that was clicked
        setSelectedLocation(locations[locationKey]);
    }
};

const hyrulefield=[65,90];
const gerudo=[50,50];
const karusavalley=[50,18];
const faronforest=[30,120]
const taobab=[35,78];
const akkla=[83,173];
const spiral=[80,190];
const Kakariko=[58,138];
const seres=[71,52];
const Kara=[36,38];

return(
<div className="mapanddes" id="map">
<MapContainer center={hyrulefield} zoom={2.5} scrollWheelZoom={false}>
    <ImageOverlay url={Totkmap} bounds={imageBounds} />
    <Marker position={hyrulefield} eventHandlers={{ click: () => handleMarkerClick('hyrulefield') }}>
        <Popup>
            Hyrule Field
        </Popup>
    </Marker>
    <Marker position={gerudo} eventHandlers={{ click: () => handleMarkerClick('gerudo') }}>
        <Popup>
            Gerudo Highlands
        </Popup>
    </Marker>
    <Marker position={taobab} eventHandlers={{ click: () => handleMarkerClick('taobab') }}>
        <Popup>
           Taobab Grassland
        </Popup>
    </Marker>
    <Marker position={faronforest}>
        <Popup>
            Faron Rainforest
        </Popup>
    </Marker>
    <Marker position={karusavalley} eventHandlers={{ click: () => handleMarkerClick('canyon') }}>
        <Popup>
            Karusa Valley
        </Popup>
    </Marker>
    <Marker position={akkla}>
        <Popup>
            North Akkala
        </Popup>
    </Marker>
    <Marker position={spiral}>
        <Popup>
            Rist Peninsula
        </Popup>
    </Marker>
    <Marker position={Kakariko}>
        <Popup>
            Kakariko Village
        </Popup>
    </Marker>
    <Marker position={seres} eventHandlers={{ click: () => handleMarkerClick('seres') }}>
        <Popup>
            Seres Scablands
        </Popup>
    </Marker>
    <Marker position={Kara}>
        <Popup>
           Kara Kara Bazaar
        </Popup>
    </Marker>
</MapContainer>
<div className="details-container">
    {selectedLocation ? (
        <>
            <img src={selectedLocation.image1} alt={selectedLocation.name} />
            <img src={selectedLocation.image2} alt={selectedLocation.realloc}/>
            <div className="description">{selectedLocation.name}</div>
            <div className='descriptionsmol'>{selectedLocation.description}</div>
        </>
    ) : (
        <div className="placeholder">Select a location</div>
    )}
</div>
</div>
);}

export default Map;

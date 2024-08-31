import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLng } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react';





interface MapProps {
  styles: string,
  mapSizeHandler: () => void,
  searchIcon: boolean,
  showAndHideSearchBox: () => void,
  iconName: string, 
  cityInformation ?: number[]

}

export const Map: React.FC<MapProps> = ({ styles, mapSizeHandler, searchIcon, showAndHideSearchBox, iconName,cityInformation}) => {

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;
  
  function LocationMarker() {
    const [position, setPosition] = useState<LatLng | null>(new LatLng(35.6892, 51.3890));
  
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
  
    const handleDragEnd = (e: L.DragEndEvent) => {
      const marker = e.target;
      const newPosition = marker.getLatLng();
      setPosition(newPosition);
      map.flyTo(newPosition, map.getZoom());
    };
  
    return (position === null) ? null : (
      <Marker position={position} draggable={true} eventHandlers={{ dragend: handleDragEnd }}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }


  // const [location,setLocation] = useState<number[]>([35.6892, 51.3890])
  console.log(cityInformation + 'map');


  return (
    <MapContainer className={`${styles}`} center={[35.6892, 51.3890]} zoom={10} scrollWheelZoom={false}>
      <span 
        onClick={mapSizeHandler} 
        className='material-icons  hover:bg-gray-100  bg-white border-[1px] border-solid border-gray-400 cursor-pointer z-[999] text-[24px] absolute top-[72px] left-[11px] p-[3px] '>{iconName}</span>
      {
        searchIcon ? <span
          onClick={showAndHideSearchBox}  
          className='material-icons  hover:bg-gray-100  bg-white border-[1px] border-solid border-gray-400 cursor-pointer z-[999] text-[24px] absolute top-[103px] left-[11px] p-[3px] '>search</span>
        : null
      }
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}
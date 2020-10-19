import React, { useEffect,useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from  'leaflet';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/mapa.css';
import api from '../services/api';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58,60],
  iconAnchor: [29,68],
  popupAnchor: [170,2],
})

interface Orphanage  {
  id: number;
  latitude: number;
  longitude:  number;
  name: string;
}

function Mapa() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Lisboa</strong>
          <span>Portugal</span>
        </footer>
      </aside>

      <Map 
        center={[38.7241156,-9.1345474]}
        zoom={15}
        style={{ width: '100%', height:'100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer 
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        
        {orphanages.map(orphanage => {
          return (
            <Marker 
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude,orphanage.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanage/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF"/>
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link to="/orphanages/create" className="create"> 
        <FiPlus size={32} color ="#FFF" />
      </Link>
    </div>
  );
} 
export default Mapa;
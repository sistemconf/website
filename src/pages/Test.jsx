import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import "./Test.scss"

const position = [51.505, -0.09]

export default function Test() {
    return (
        <div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <div></div>
    </Marker>
  </MapContainer>   
        </div>
    )
}
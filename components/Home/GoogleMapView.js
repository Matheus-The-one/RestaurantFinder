import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';
import React, { useState } from 'react';

function GoogleMapView() {
  const [map, setMap] = useState(null);
  const containerStyle = {
    width: '100%',
    height: '500px',
  };
  const coordinate = { lat: 41.6938, lng: 44.8015 };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const onLoad = map => {
    console.log('map loaded:', map);
    setMap(map);
  };

  const onUnmount = map => {
    console.log('map unmounted:', map);
    setMap(null);
  };

  return (
    <div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinate}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
        />
      )}
    </div>
  );
}

export default GoogleMapView;

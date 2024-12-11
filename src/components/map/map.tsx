"use client";
"use strict";
// pages/index.tsx
import React, { useState, useEffect, useCallback } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = { lat: 12.6883602, lng: 108.0557606 }; // Tọa độ mặc định

type MapProps = {
  latitude: number;
  longitude: number;
  onMapClick: (event: google.maps.MapMouseEvent) => void;
};

const MapComponent: React.FC<MapProps> = ({
  latitude,
  longitude,
  onMapClick,
}) => {
  return (
    <LoadScript googleMapsApiKey={process.env.MAP_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: latitude, lng: longitude }}
        zoom={15}
        onClick={onMapClick}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

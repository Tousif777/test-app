import React, { useEffect } from "react";
// import GoogleMapReact from 'google-map-react';

const Map = () => {
        const [lat] = React.useState(23.760553125947684);
        const [lng] = React.useState(90.38927467742258);
        const [lat2] = React.useState(23.813676977644572);
        const [lng2] = React.useState(90.42413504023418);
        const [distance, setDistance] = React.useState(0);

        const handleDistanceInKm = (lat1, lng1, lat2, lng2) => {
                const R = 6371e3; // metres
                const φ1 = (lat1 * Math.PI) / 180;
                const φ2 = (lat2 * Math.PI) / 180;
                const Δφ = ((lat2 - lat1) * Math.PI) / 180;
                const Δλ = ((lng2 - lng1) * Math.PI) / 180;
                const a =
                        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                const d = R * c;
                //make it in km
                setDistance(d / 1000);
        };

        useEffect(() => {
                handleDistanceInKm(lat, lng, lat2, lng2);
        }, [lat, lng, lat2, lng2]);

        return (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                        <p className="text">
                                I don't have visa or master card so can't able to show it. But you
                                can check the commented code by adding APIKEY in the GoogleMapReact
                        </p>
                        {/* <GoogleMapReact
            bootstrapURLKeys={{ key: "Your Key" }}
            defaultCenter={{ lat: lat, lng: lng }}
            defaultZoom={11}
          >
            <div lat={lat} lng={lng}>
                <img src="https://image.flaticon.com/icons/svg/848/848896.svg" alt="marker" style={{width: "50px", height: "50px"}} />
            </div>
            <div lat={lat2} lng={lng2}>
                <img src="https://image.flaticon.com/icons/svg/848/848896.svg" alt="marker" style={{width: "50px", height: "50px"}} />
            </div>
          </GoogleMapReact> */}
                        <p className="text" style={{ fontSize: "30px" }}>
                                Distance: {distance} Km
                        </p>
                </div>
        );
};

export default Map;

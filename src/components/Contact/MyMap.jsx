import React from "react"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

function MyComponent({ lat, lng }) {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    height: "400px",
  }

  const center = {
    lat,
    lng,
  }

  const onLoad = marker => {
    console.log("marker: ", marker)
  }

  const isBrowser = typeof window !== "undefined"
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC74nQqjNRPIiNGvari1jL9xzb9MEbr2Vc",
  })

  if (loadError || (!isBrowser && !window?.google)) {
    return <div>Oops, Map cannot be loaded right now, sorry.</div>
  }

  return (
    isBrowser &&
    isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker onLoad={onLoad} position={center} />
      </GoogleMap>
    )
  )
}

export default React.memo(MyComponent)

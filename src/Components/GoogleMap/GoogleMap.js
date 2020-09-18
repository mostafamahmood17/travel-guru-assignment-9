import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
    width: "400px",
    height: '500px',
    marginTop:"150px"
  };

class GoogleMap extends Component {
    constructor(props) {
    super(props);

    this.state = {
      stores: [
              {latitude: 21.42, longitude: 91.92},
              {latitude: 21.4445, longitude: 91.9802},
              {latitude: 21.4645, longitude: 91.9922},
              ]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 21.4285, lng: 91.9702}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}



export default GoogleApiWrapper({
    apiKey: "AIzaSyBU4UH-khIPMLDqMsPk_nrYIDSJEE2JT-k"
  })(GoogleMap)
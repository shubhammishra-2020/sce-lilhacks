import React, {Component} from 'react';
import {Map,  Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
          lat: 49.2827291, 
        lng: -123.1207375
    
      }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
        initialCenter = {{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
        }}
            >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
        </Map>
      )
    }
  }
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyBid1q7E2tErDxr7-XxakCgizEWtHVzH98')
  })(MapContainer)
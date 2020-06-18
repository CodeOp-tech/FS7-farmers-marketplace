import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import api from "../utils/apiSuppliers";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export class SupplierMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bounds: "",
      suggestions: [],
      places: [],
      locationStart: {
        lat: parseFloat(localStorage.getItem("lat")),
        lng: parseFloat(localStorage.getItem("lng")),
      },
      locationEnd: {},
    };
  }

  onMarkerClick = (props, marker, e) => {
    const infoWindow = new props.google.maps.InfoWindow({
      content: `${props.name}`,
    });
    infoWindow.open(props.map, marker);
  };

  initPlaces(mapProps, map, ctx) {
    const { google } = mapProps;
    console.log(this.props);
    google.maps.event.addListener(map, "idle", function () {
      let bounds = map.getBounds();
      localStorage.setItem("bounds", bounds.toUrlValue());
      ctx.searchDB();
    });
  }

  // Here is the modified search using the geocode library to return lat,lng co-ords to draw on the map
  searchDB = async () => {
    let res = await api.getSuppliersFiltered(localStorage.getItem("bounds"));
    this.setState({ places: [] });

    if (res?.data) {
      for (let i = 0; i < res.data.length; i++) {
        let record = res.data[i];
        this.setState({ places: [...this.state.places, record] });
      }
    }
  };

  render() {
    const { places } = this.state;

    return (
      <div className="container" style={{ width: "100%" }}>
        <Map
          id="myMap"
          google={this.props.google}
          onReady={(mapProps, map) => this.initPlaces(mapProps, map, this)}
          zoom={14}
          style={{ height: "500px", width: "485px" }}
          initialCenter={{ lat: localStorage.lat, lng: localStorage.lng }}
        >
          {places.map((market, i) => (
            <Marker
              onMouseover={this.onMarkerMouseover}
              name={market.name}
              position={{ lat: market.lat, lng: market.lng }}
              key={i}
            />
          ))}
          {places.map((market, i) => (
            <InfoWindow onClose={this.onInfoWindowClose} key={i}>
              <div>
                <h1>{market.name}</h1>
                <h2>{market.address1 + market.postcode + market.city}</h2>
              </div>
            </InfoWindow>
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey,
})(SupplierMap);

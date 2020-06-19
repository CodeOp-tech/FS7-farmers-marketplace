import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import api from "../utils/apiMarkets";
import FoodMilesNumber from "./FoodMilesNumber";

// const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const apiKey = "AIzaSyD9qAIYJOoKf0haJPiuo1FbM3ec8_hiINY";

let myBounds;
export class MapContainer extends Component {
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
    google.maps.event.addListener(map, "idle", function () {
      let bounds = map.getBounds();
      localStorage.setItem("bounds", bounds.toUrlValue());
      ctx.searchDB();
    });
  }

  // Here is the modified search using the geocode library to return lat,lng co-ords to draw on the map
  searchDB = async () => {
    let res = await api.getMarketsFiltered(localStorage.getItem("bounds"));
    this.setState({ places: [] });
    this.setState({ suggestions: [] });
    if (res?.data) {
      for (let i = 0; i < res.data.length; i++) {
        let record = res.data[i];
        this.setState({ suggestions: [...this.state.suggestions, record] });
        this.setState({ places: [...this.state.places, record] });
      }
    }
  };

  render() {
    const { suggestions, places } = this.state;

    myBounds = new this.props.google.maps.LatLngBounds();

    return (
      <div className="container" style={{ width: "100%" }}>
        <nav
          className="navbar navbar-light bg-light mt-4"
          style={{ width: "1000px" }}
        >
          <a className="navbar-brand subtitle" href="#">
            Find your nearest Market
          </a>
        </nav>
        <div className="row">
          {/* LIST CONTAINER */}
          <div className="col-md-6">
            <div className="card w-100">
              <div className="card-header text">Suggested Markets</div>
            </div>
            {!suggestions?.length ? (
              <ul className="list-group list-group-flush">
                <div
                  className="alert alert-danger my-4 text text-center"
                  role="alert"
                >
                  {`Sorry, there are no markets to show around you!`}
                </div>
              </ul>
            ) : (
              <div>
                {suggestions.map((place) => (
                  <ul className="list-group list-group-flush border-left border-bottom border-right border-light">
                    <li
                      key={place.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div classsName="row">
                        <span classsName="text">
                          <strong>{place.name}</strong>
                        </span>
                        <br />
                        <span className="text text-muted">
                          {place.address1}
                        </span>
                        <br />

                        <span className="text text-muted">{`Day: ${place.day}     ${place.start_time} - ${place.end_time}`}</span>
                        <br />

                        <span className="text text-muted d-flex align-items-center">
                          <i className="fas fa-car-side text fa-1x CCbeige mr-2"></i>
                          <strong>Food Miles: </strong>
                          <FoodMilesNumber
                            start={this.state.locationStart}
                            end={{
                              lat: parseFloat(place.lat),
                              lng: parseFloat(place.lng),
                            }}
                          />
                        </span>
                      </div>
                      <button className="btn btn-link">
                        <Link to={`/markets/${place.id}`}>
                          <i className="fas fa-info-circle CCblue fa-2x"></i>
                        </Link>
                      </button>
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </div>{" "}
          {/* MAP CONTAINER */}
          <div className="col-md-6">
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
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey,
})(MapContainer);

import React, { Component } from "react";

export default class GeoLocator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      location: {},
      msg: "",
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.setState({ msg: "Geolocation is not supported by this browser." });
    }
  };

  showPosition = (position) => {
    this.setState({ lat: position.coords.latitude });
    this.setState({ lng: position.coords.longitude });
    // If lat & lng aren't alreaady set, then set the location
    if (!this.props.lat || !this.props.lng) {
      this.props.setLocation(
        position.coords.latitude,
        position.coords.longitude
      );
    }

    this.setState({ location: { lat: this.state.lat, lng: this.state.lng } });
  };

  render() {
    const { lat, lng, location } = this.state;
    return <div></div>;
  }
}

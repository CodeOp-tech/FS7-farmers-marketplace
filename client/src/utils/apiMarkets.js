import axios from "axios";
const apiRoot = "/markets";

export default {
  // GET all the markets
  getMarkets: () => {
    return axios.get(`${apiRoot}`).catch(function (error) {
      console.log(error);
    });
  },

  // GET one market
  getOneMarket: (id) => {
    return axios.get(`${apiRoot}/${id}`).catch(function (error) {
      console.log(error);
    });
  },

  // GET products filtered list by location
  //where bounds is an object:
  //i.e. {south: "51.00000, west: -0.210000, north: 51.00200, east: -0.201000"}
  getMarketsFiltered: (bounds) => {
    bounds = bounds.split(",");
    let south = bounds[0];
    let west = bounds[1];
    let north = bounds[2];
    let east = bounds[3];

    let query = `?south=${south}&west=${west}&north=${north}&east=${east}`;
    return axios.get(`${apiRoot}/${query}`).catch(function (error) {
      console.log(error);
    });
  },
};

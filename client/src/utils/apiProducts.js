import axios from "axios";
const apiRoot = "/api/products";

export default {
  // GET all the products
  getProducts: () => {
    return axios.get(`${apiRoot}`).catch(function (error) {
      console.log(error);
    });
  },

  // GET one product
  getOneProduct: (id) => {
    return axios.get(`${apiRoot}/${id}`).catch(function (error) {
      console.log(error);
    });
  },

  // // GET products filtered list by name
  // getProductsFiltered: (name) => {
  //   return axios.get(`${apiRoot}?name=${name}`).catch(function (error) {
  //     console.log(error);
  //   });
  // },

  // GET products filtered list by name
  getProductsFiltered: (name = "", market_id = "", seller_id = "") => {
    return axios
      .get(
        `${apiRoot}?name=${name}&market_id=${market_id}&seller_id=${seller_id}`
      )
      .catch(function (error) {
        console.log(error);
      });
  },
};

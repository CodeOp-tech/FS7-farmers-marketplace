import axios from "axios";
const apiRoot = "/api/users";

export default {
  // POST request for new user
  postUser: (firstname, lastname, email, password, username) => {
    return axios
      .post(`${apiRoot}`, { firstname, lastname, email, password, username })
      .catch(function (error) {
        console.log(error);
      });
  },
};

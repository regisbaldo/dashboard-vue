import { Model as BaseModel } from 'vue-api-query'

export default class Model extends BaseModel {

  // define a base url for a REST API
  baseURL () {
    return process.env.URL_API_NUBBI
  }

  // implement a default request method 
  request (config) {
    config.headers ={
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token-crm")
    };
    return this.$http.request(config)
  }
}
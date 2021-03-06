import axios from 'axios';
import baseUrlDomain from '../Assets/baseUrl'
const baseUrl = baseUrlDomain+":3001/api";

export {getAccountByApiToken};
function getAccountByApiToken(apiToken){
  return axios.get(baseUrl + "/user/api_token=" + apiToken)
  .then( response => response.data)
  .catch((error) => {
    alert(error.response.data.error+ " from USER in utils")
  });
}

export {getAccountByID};
function getAccountByID(user_ID){
  return axios.get(baseUrl + "/user/userId=" + user_ID)
  .then( response => response.data )
  .catch((error) => {
    alert(error.response.data.error+ " from USER in utils")
    console.log(error)
  });
}

export {getDevCount};
function getDevCount(){
  return axios.get(baseUrl + "/getDevCount")
  .then( response => response.data )
  .catch((error) => {
    alert(error + " DevCount")
    console.log(error)
  });
}

export {getClientCount};
function getClientCount(){
  return axios.get(baseUrl + "/getClientCount")
  .then( response => response.data )
  .catch((error) => {
    alert(error + " ClientCount")
    console.log(error)
  });
}

export {getSiteStats};
function getSiteStats(){
  return axios.get(baseUrl + "/getSiteStats")
  .then( response => response.data )
  .catch((error) => {
    alert(error + " Site Stats")
    console.log(error)
  });
}
export {addFunds};
function addFunds(Amount, API_token){
    return axios.post(baseUrl + "/addFunds", {
        api_token : API_token,
        amount : Amount
    })
    .then((response) => {})
    .catch((error) => {
      alert("This is an error from addFunds " + error.response.data.error);
    });
}

export{searchUsers};
function searchUsers(Input){
    return axios.post(baseUrl + "/searchUsers", {
        input : Input
    })
    .then((response) => response.data )
    .catch((error) => { });
}

export {rateUser};
function rateUser(API_token, DemandId, Rating, Reason){
    return axios.post(baseUrl + "/rate", {
        api_token : API_token,
        demandId : DemandId,
        rating : Rating,
        justification : Reason
    })
    .then((response) => alert("success : " + response.message))
    .catch((error) => {
      alert("This is an error from rating :" + error.response.data.error);
    });
}

export {getAlerts};
function getAlerts(API_token){
    return axios.post(baseUrl + "/getAlerts", {
        api_token : API_token
    })
    .then((response) => alert("success : " + response.message))
    .catch((error) => {
      alert("This is an error from account alerts :" + error.response.data.error);
    });
}

export {getTopDevs};
function getTopDevs(){
  return axios.get(baseUrl + "/users/topDevs" )
  .then( response => response.data )
  .catch((error) => {
    alert(" from USER in utils " + error.response.data.error)
  });
}

export {getTopClients};
function getTopClients(){
  return axios.get(baseUrl + "/users/topClients" )
  .then( response => response.data )
  .catch((error) => {
    alert(" from USER in utils " + error.response.data.error)
  });
}

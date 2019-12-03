import * as actionTypes from "./actionTypes";
import axios from "axios";

export const login = objUser => dispatch => {
  console.log("In action", objUser);
  let result = {
    isValidUser: false,
    userType: "",
    userName: ""
  };
  if (objUser.userName === "admin") {
    result.isValidUser = true;
    result.userType = "ADMIN";
    result.userName = objUser.userName;
  } else {
    result.isValidUser = false;
    result.userType = "GUEST";
    result.userName = "GUEST";
  }
  dispatch({
    type: actionTypes.LOGIN,
    payload: result
  });
};

export const logInServer = objUser => dispatch => {
  console.log(objUser);
  axios({
    method: "POST",
    url: "http://localhost:5002/api/login",
    data: objUser
  }).then(res => {
    dispatch({
      type: actionTypes.LOGIN,
      result: res.data
    });
  });
};

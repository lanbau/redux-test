import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

// ERROR!!!! REDUX WANTS A PLAIN OBJECT
// export function getData() {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(json => {
//       return { type: "DATA_LOADED", payload: json };
//     });
// }

// REDUX THUNK - YOU CAN RETURN A FUNCTION WITH DISPATCH PARAMS CONTAINING THE FETCH RESULTS
// export function getData() {
//   return function(dispatch) {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(json => {
//         dispatch({ type: "DATA_LOADED", payload: json });
//       });
//   };
// }

//REDUX SAGAAAAA
export function getData() {
  return { type: "DATA_REQUESTED" };
}
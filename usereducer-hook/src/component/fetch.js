// when 2 or more states change together
// we can use useReducer
import React, { useReducer, useState } from "react";
import { INITIAL_STATE, postReducer } from "./postReducer";
import {POST_ACTION_TYPE} from './postActionType'
export const FetchExample = () => {
  // const [data, setData] = useState({});
  //   const [loading , setLoading] = useState(false)
  //   const [error, setError]= useState(false)

  //   function handleFetch() {
  //     setLoading(true)
  //     fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((res) =>res.json())
  //     .then((data)=> {setData(data); setLoading(false) })
  //     .catch((err) =>{ setError(true); setLoading(false); console.log(err)})
  //   }

  // useReducer fucntion return current state and dispatch
  // dispatch allow us to send action through the reducer

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
  function handleFetch() {
    dispatch({ type: POST_ACTION_TYPE.FETCH_START});
    fetch("https://jsonplaceholder.typicode.com/pos11ts/1")
      .then((res) => {
        if (!res.ok) {
          // Throw an error if the response status is not ok (i.e., not in the range 200-299)
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch({ type: POST_ACTION_TYPE.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: POST_ACTION_TYPE.FETCH_ERROR , payload:err.message });
      });
  }

  return (
    <div>
      <button
        onClick={() => {
          handleFetch();
        }}
      >
        Fetch Api
      </button>
      {state.loading && <p> Loading ...</p>}
      {state.post && <p> {state.post?.title}</p>}
      {state.error && <p> {state.errorMessage} </p>}
    </div>
  );
};

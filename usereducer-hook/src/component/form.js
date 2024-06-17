import React, { useReducer, useRef, useState } from "react";
import "./Form.css";
import { INITIAL_STATE, formReducer } from "./formReducer";
import {FORM_ACTION_TYPE} from './formActionType'
export const Form = () => {
 
  const [state, dispatch ] = useReducer(formReducer,INITIAL_STATE)

  const handleChange =(e)=>{
    dispatch({type:FORM_ACTION_TYPE.CHANGE_INPUT, payload:{name:e.target.name, value:e.target.value}})
  }
  console.log(state)
  const tagRef = useRef();
 
  const handleTags = () => {
    const tags = tagRef.current.value.split(",").map((elem)=> elem.trim())
    console.log(tags)
    // console.log(tags)
    tags.forEach((tag) => {
     dispatch({type:FORM_ACTION_TYPE.ADD_TAG, payload:tag})
    });
  };

  // const handleRemoveTag = (tag) => {
  //   setProduct((prev) => ({
  //     ...prev,
  //     tags: prev.tags.filter((t) => t !== tag),
  //   }));
  // };
  // const handleIncrease = () => {
  //   setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  // };
  // const handleDecrease = () => {
  //   setProduct((prev) => ({
  //     ...prev,
  //     quantity: prev.quantity - 1,
  //   }));
  // };

  const inputStyle = {
    width: "50%",
    padding: 10,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
      }}
    >
      <div>
        <input onChange={handleChange} style={inputStyle} type="text" placeholder="Title" name="title"/>
        <input onChange={handleChange} style={inputStyle} ype="text" placeholder="Desc" name="desc" />
        <input onChange={handleChange} style={inputStyle} type="text" placeholder="Price" name="price"/>
      </div>
      <div className="category" name="category">
        <select name="category"  onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
      </div>

      <div className="tags">
        <h2>Tags</h2>
        <textarea
          ref={tagRef}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button onClick={handleTags} type="button">
          Add Tags
        </button>

        {state.tags.map((tag) => (
          <small onClick={()=>{ dispatch({type:FORM_ACTION_TYPE.REMOVE_TAG,payload:tag})}} key={tag}>
           {" "} {tag}
          </small>
        ))}
      </div>

      <div className="quantity">
        <button type="button" onClick={()=>dispatch({type:FORM_ACTION_TYPE.DECREASE})}>
          -
        </button>
        <span>Quantity </span>
        <button type="button" onClick={()=>dispatch({type:FORM_ACTION_TYPE.INCREASE})}>
          +
        </button>
      </div>
    </div>
  );
};

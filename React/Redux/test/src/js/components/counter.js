import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCounterPlus } from "../redux/slice/counterSlice";

const counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handler = (num) => {
    dispatch(setCounterPlus({ num }));
  };

  return (
    <div>
      <button
        onClick={() => {
          handler(1);
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          handler(-1);
        }}
      >
        Minus
      </button>
    </div>
  );
};

export default counter;

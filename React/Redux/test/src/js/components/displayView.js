import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";

const displayView = () => {
  const state = useSelector((state) => state);
  const { counter } = state;

  return <div>Count: {counter.count}</div>;
};

export default displayView;

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increament, decreament, reset,incrementByAmount } from "./Store/slice/counterSlice";
const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(increament());
  };
  const substractHandler = () => {
    dispatch(decreament());
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={addHandler}>+</button>
        <h1>{counter}</h1>
        <button onClick={substractHandler}>-</button>
      </div>
      <button onClick={()=>dispatch(reset())}>reset</button>
      <button onClick={()=>dispatch(incrementByAmount(101))}>increamentByAmount</button>
    </>
  );
};

export default Counter;

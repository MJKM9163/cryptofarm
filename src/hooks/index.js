import { useSelector } from "react-redux";

export const TimeCall = (callData) => {
  const time = useSelector((store) => store[callData]);
  return time;
};

export const test = () => {
  console.log("test call");
};

import React from "react";
import styled from "styled-components";
import { TimeCall } from "../../hooks";

const TimeUIBox = styled.div`
  color: #ebb8ff;
`;

// text
//  나타낼 정보 문자열
// callData
//  0 index -> reducer 이름
//  1 index -> timeData의 종류
const TimeUI = ({ text, callData }) => {
  let time = TimeCall(callData[0]);
  return (
    <TimeUIBox>
      {text} {time.timeData[callData[1]]}
    </TimeUIBox>
  );
};

export default TimeUI;

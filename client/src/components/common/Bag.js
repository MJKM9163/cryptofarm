import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BagBox = styled.div`
  position: absolute;
  width: 320px;
  height: 150px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
`;

const Bag = () => {
  const toggle = useSelector((state) => state.toggle.bag);
  return (
    <div>
      {toggle ? (
        <BagBox>
          <div></div>
        </BagBox>
      ) : null}
    </div>
  );
};

export default Bag;

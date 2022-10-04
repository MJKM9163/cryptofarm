import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const GroundSelect = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //top: -300px;
  //left: 10vw;
  width: 250px;
  height: 400px;
  background-color: #80808090;
  color: #e0e0e0;

  .select {
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;

    button {
      width: 85px;
      height: 50px;

      border: 0px;
    }
    .harvesting {
      background-color: #ffca57;
    }
    .delete {
      background-color: #ff3e3e;
    }
  }
`;

const ActionTap = () => {
  const tapCheck = useSelector((store) => store);
  return (
    <GroundSelect>
      <div className="status">
        <div className="name">알록달록 새콤 수박</div>
        <div className="quality">
          등급 : <span>???</span>
        </div>

        <div className="timeData">
          <div>심은 날짜 : 22. 9. 22</div>
          <div>예상 수확일 : 22. 10. 19</div>
        </div>
      </div>

      <div className="select">
        <button className="harvesting">수확</button>
        <button className="delete">제거</button>
      </div>
    </GroundSelect>
  );
};

export default ActionTap;

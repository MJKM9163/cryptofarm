import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { planting } from "../../store/reducers/groundSlice";

const GroundSelect = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 20%;
  left: 65%;
  width: 250px;
  height: 400px;
  background-color: #80808090;
  color: #e0e0e0;
  z-index: 2;

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
  const dispatch = useDispatch();
  const tapData = useSelector((store) => store.ground);

  return tapData.check ? (
    <GroundSelect>
      <div className="status">
        <div className="name">{tapData.name}</div>
        <div className="quality">
          등급 : <span>{tapData.quality}</span>
        </div>

        <div className="timeData">
          <div>심은 날짜 : {tapData.timeData.plantedTime}</div>
          <div>예상 수확일 : {tapData.timeData.harvestTime}</div>
        </div>
      </div>

      <div className="select">
        <button
          className="harvesting"
          onClick={() => {
            dispatch(planting());
          }}
        >
          심기
        </button>
        <button className="delete">제거</button>
      </div>
    </GroundSelect>
  ) : null;
};

export default ActionTap;

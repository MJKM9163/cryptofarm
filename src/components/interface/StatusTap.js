import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { planting } from "../../store/reducers/groundSlice";
import TimeUI from "../common/TimeUI";

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

const StatusTap = () => {
  const dispatch = useDispatch();
  const { check, name, quality } = useSelector((store) => store.ground);

  return check ? (
    <GroundSelect>
      <div className="status">
        <div className="name">{name}</div>
        <div className="quality">
          등급 : <span>{quality}</span>
        </div>

        <div className="timeData">
          <TimeUI text={"심은 날짜 :"} callData={["ground", "plantedTime"]} />
          <TimeUI text={"예상 수확일 :"} callData={["ground", "harvestTime"]} />
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

export default StatusTap;

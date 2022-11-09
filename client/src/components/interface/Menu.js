import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { bagToggle } from "../../store/reducers/toggleSlice";

const MenuBox = styled.div`
  position: absolute;
  color: white;
  z-index: 2;
  .select {
    background-color: #365597;
    width: 170px;
    padding: 15px 0px 15px 15px;
    border-bottom: 1px solid black;
    font-size: 24px;
    transition: 0.2s;
    :hover {
      color: #3d3d3d;
      background-color: #aaaaaa;
    }
  }
  .taps {
    background-color: azure;
    color: #1a1a1a;
    transition: 0.2s;

    ul {
      transition: 0.2s;
      li {
        padding: 5px 0px 5px 10px;
        font-size: 20px;
        :hover {
          background-color: #c8fafa;
        }
      }
    }
  }

  .buy {
    height: ${(props) => (props.check.buy ? "100px" : "0px")};
    border-bottom: ${(props) => (props.check.buy ? "1px solid black" : "0")};
    ul {
      opacity: ${(props) => (props.check.buy ? "100%" : "0%")};
      li {
        display: ${(props) => (props.check.buy ? "block" : "none")};
      }
    }
  }
  .sell {
    height: ${(props) => (props.check.sell ? "60px" : "0px")};
    border-bottom: ${(props) => (props.check.sell ? "1px solid black" : "0")};
    ul {
      opacity: ${(props) => (props.check.sell ? "100%" : "0%")};
      li {
        display: ${(props) => (props.check.sell ? "block" : "none")};
      }
    }
  }
  /* .bag {
    height: ${(props) => (props.check.bag ? "100px" : "0px")};
    border-bottom: ${(props) => (props.check.bag ? "1px solid black" : "0")};
    ul {
      opacity: ${(props) => (props.check.bag ? "100%" : "0%")};
      li {
        display: ${(props) => (props.check.bag ? "block" : "none")};
      }
    }
  } */
  .work {
    height: ${(props) => (props.check.work ? "60px" : "0px")};
    border-bottom: ${(props) => (props.check.work ? "1px solid black" : "0")};
    ul {
      opacity: ${(props) => (props.check.work ? "100%" : "0%")};
      li {
        display: ${(props) => (props.check.work ? "block" : "none")};
      }
    }
  }
  .info {
    height: ${(props) => (props.check.info ? "60px" : "0px")};
    border-bottom: ${(props) => (props.check.info ? "1px solid black" : "0")};
    ul {
      opacity: ${(props) => (props.check.info ? "100%" : "0%")};
      li {
        display: ${(props) => (props.check.info ? "block" : "none")};
      }
    }
  }
`;

const Menu = () => {
  const dispatch = useDispatch();
  const [clickCheck, setClickCheck] = useState({
    buy: false,
    sell: false,
    // bag: false,
    work: false,
    info: false,
  });

  return (
    <MenuBox check={clickCheck}>
      <div
        className="select"
        onClick={(e) => {
          setClickCheck({ ...clickCheck, buy: !clickCheck.buy });
        }}
      >
        구입
      </div>
      <div className="taps buy">
        <ul>
          <li>일반</li>
          <li>특수</li>
        </ul>
      </div>

      <div
        className="select"
        onClick={(e) => {
          setClickCheck({ ...clickCheck, sell: !clickCheck.sell });
        }}
      >
        판매
      </div>
      <div className="taps sell">
        <ul>
          <li>거래소</li>
        </ul>
      </div>

      <div
        className="select"
        onClick={(e) => {
          dispatch(bagToggle());
        }}
      >
        가방
      </div>
      {/* <div className="taps bag">
        <ul>
          <li>일반</li>
          <li>특수</li>
        </ul>
      </div> */}

      <div
        className="select"
        onClick={(e) => {
          setClickCheck({ ...clickCheck, work: !clickCheck.work });
        }}
      >
        작업
      </div>
      <div className="taps work">
        <ul>
          <li className="gene">유전자 조합</li>
        </ul>
      </div>

      <div
        className="select"
        onClick={(e) => {
          setClickCheck({ ...clickCheck, info: !clickCheck.info });
        }}
      >
        정보
      </div>
      <div className="taps info">
        <ul>
          <li>수확 도감</li>
        </ul>
      </div>
    </MenuBox>
  );
};

export default Menu;

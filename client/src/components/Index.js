import React, { useEffect, useState } from "react";
import StatusTap from "./interface/StatusTap";
import Menu from "./interface/Menu";
import Bag from "./common/Bag";
import Web3 from "web3";

const Components = () => {
  // const [web3, setWeb3] = useState();
  // const [account, setAccounts] = useState("");
  // let accounts = null;

  // useEffect(() => {
  //   if (typeof window.ethereum !== "undefined") {
  //     // window.ethereum이 있다면
  //     console.log(window.ethereum);
  //     try {
  //       const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다
  //       console.log(web);
  //       setWeb3(web);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // }, []);

  // const connectWallet = async () => {
  //   accounts = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });

  //   setAccounts(accounts);
  // };
  // const connectWallet2 = async () => {
  //   accounts = await window.ethereum.request({
  //     method: "eth_accounts",
  //   });
  //   console.log(accounts);
  // };

  return (
    <div>
      {/* <button onClick={() => connectWallet()}>asdasdasd</button>
      <button onClick={() => connectWallet2()}>asdasdasd</button>
      <button onClick={() => console.log(account)}>dasdasdadasdwewewewe</button> */}
      <Menu />
      <Bag />
      <StatusTap />
    </div>
  );
};

export default Components;

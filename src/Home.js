import React, { useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

import { AiOutlineArrowUp } from "react-icons/ai";

import { AiOutlineDollar } from "react-icons/ai";

import { BsJournalText, BsHandbag } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";

import { BiDownArrowAlt } from "react-icons/bi";
import ProgressReport from "./ProgressReport";
import Expenses from "./Chart/Expenses";
import Customers from "./Customers";
import Products from "./Products";

const DUMMY_EXPENSES = [];

function Home() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <main className="main-container">
      <div className="main-cards flex-wrap">
        {/* <div className="card">
          <div className="row p-2" >
            <div className="col-lg-4 icon-parent" style={{backgroundColor: "rgb(188, 231, 189)"}} > 
            <AiOutlineDollar className="icon-font" style={{ color: " rgb(88, 169, 122)"}} /></div>

            <div className="col-lg-8">
              <p className="card-title">Earning</p>
              <b>$198K</b>
              <p className="text-details">    <span style={{color:"green"}}> <AiOutlineArrowUp /> 37.8%  </span> <span className="profit-details">this months</span></p>
            </div>
          </div>
        </div>

*/}

<div className="card">
          <div className="row p-2">
            <div
              className="col-lg-4 col-md-4 col-sm-12 icon-parent"
              style={{ backgroundColor: "rgb(188, 231, 189)" }}
            >
              <AiOutlineDollar
                className="icon-font"
                style={{ color: "rgb(88, 169, 122)" }}
              />
            </div>

            <div className="col-lg-8 col-md-8 col-sm-12">
              <p className="card-title">Earning</p>
              <b>$198K</b>
              <p className="text-details">
                <span style={{ color: "green" }}>
                  <AiOutlineArrowUp /> 37.8%
                </span>
                <span className="profit-details">this months</span>
              </p>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="row p-2">
            <div className="col-lg-4 col-md-4 col-sm-12  icon-parent" style={{backgroundColor: "rgb(213, 198, 235)"}}> 
            <BsJournalText  className="icon-font" style={{ color: "rgb(126, 47, 245, 0.66)"}}  /></div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <p className="card-title">Orders</p>
              <b>$2.4K</b>              
              <p className="text-details"> <span style={{color:"red"}}> <BiDownArrowAlt /> 2%  </span> 
               <span className="profit-details">this months</span> </p>
            </div>
          </div>
        </div> 

        

        <div className="card">
          <div className="row p-2">
            <div
              className="col-lg-4 col-md-4 col-sm-12   icon-parent"
              style={{ backgroundColor: "rgb(197, 233, 243)" }}
            >
              <IoWalletOutline
                className="icon-font"
                style={{ color: "rgb(18, 67, 165)" }}
              />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <p className="card-title">Balance</p>
              <b>$2.4KK</b>
              <p className="text-details">
           
                <span style={{ color: "red" }}>
               
                  <BiDownArrowAlt /> 2%{" "}
                </span> 
                <span className="profit-details">this months</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row p-2">
            <div
              className="col-lg-4 col-md-4 col-sm-12  icon-parent"
              style={{ backgroundColor: "rgb(248, 201, 210)" }}
            >
              <BsHandbag
                className="icon-font"
                style={{ color: "rgb( 243, 21, 47, 0.66)" }}
              />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <p className="card-title">Total Sales</p>
              <b>$89K</b>
              <p className="text-details">
                {" "}
                <span style={{ color: "green" }}>
                  {" "}
                  <AiOutlineArrowUp />
                  11%{" "}
                </span>
                <span className="profit-details"> this week</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* < ProgressReport /> */}
      <div className="row">
        <div className="col-lg-9 col-sm-12">
          <Expenses items={expenses} />
        </div>
        <div className="col-lg-3 col-sm-12">
          <Customers />
        </div>
      </div>

      <Products />
    </main>
  );
}

export default Home;

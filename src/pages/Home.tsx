import React from "react";
import styled from "styled-components";
import BillComponent from "../components/Bill.component";
import CalculateTotalComponent from "../components/CalculateTotal.component";
import SelectTipComponent from "../components/SelectTip.component";
import ToShareBillComponent from "../components/ToShareBill.component";

const Home = () => {
  return (
    <OuterDiv>
      <div className="home-style">
        <div>
          <h1 className="h1">Bill</h1>
          <BillComponent />
          <SelectTipComponent />
          <ToShareBillComponent />
        </div>
        <div>
          <CalculateTotalComponent />
        </div>
      </div>
    </OuterDiv>
  );
};

export default Home;
const OuterDiv = styled.div`
  .h1 {
    color: var(--Grayish-cyan);
  }
  .home-style {
    padding: 2rem;
    width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    @media screen and (max-width: 820px) {
      display: block;
      width: 100vw;
     
    }
  }
`;

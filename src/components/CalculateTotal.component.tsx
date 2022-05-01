import React, { useState } from "react";
import ButtonComponent from "./Button.component";
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks";
import { tipAppReset } from "../redux/features/TipSlice";
import styled from "styled-components";

const CalculateTotalComponent = () => {
  const tipPerPerson = useAppSelector((state) => state.tip);
  const dispatch = useAppDispatch();
const [color, setColor]=useState<boolean>(false);

const handleClick = ()=>{
dispatch(tipAppReset())
setColor(!color)
}




  return (
    <OuterDiv>
      <InnerContainer>
        <div className="margin-bottom">
          <div className="tip-person">
            <ul>
              <li className="li-white-text">Tip Amount</li>
              <li className="li-cyan-text">/person</li>
            </ul>
            <h1>
              €
              {tipPerPerson.tipAmount !== 0
                ? `${tipPerPerson.tipAmount}`
                : `${tipPerPerson.tipAmount}.00`}
            </h1>
          </div>

          <div className="total-person">
            <ul>
              <li className="li-white-text">Total</li>
              <li className="li-cyan-text">/person</li>
            </ul>
            <h1>
              €
              {tipPerPerson.totalAmount !== 0
                ? `${tipPerPerson.totalAmount}`
                : `${tipPerPerson.totalAmount}.00`}
            </h1>
          </div>
        </div>
        <ButtonComponent
          onClick={() => handleClick() }
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            margin: "0 auto",
            width:'100%',
            backgroundColor: color ? 'var( --strong-cyan)': "var( --Dark-grayish-cyan)",
            color: color? 'white' : '',
          padding:'0.8rem 0'
              
          }}
        >
          <h2> Reset</h2>
        </ButtonComponent>
      </InnerContainer>
    </OuterDiv>
  );
};
export default CalculateTotalComponent;
const OuterDiv = styled.div`
  width: 25vw;
  @media screen and (max-width: 1500px) {
    width: 29vw;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
  }
  padding: 2rem;
  background: var(--very-dark-cyan);
  border-radius: var(--border-calc-radius);
`;
const InnerContainer = styled.div`
  .margin-bottom {
    margin-bottom: 10rem;
    @media screen and (max-width: 820px) {
      margin-bottom: 2rem;
    }
  }
  .li-white-text {
    color: var(--White);
  }
  .li-cyan-text {
    color: var(--strong-cyan);
  }
  .tip-person {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .total-person {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    align-items: center;
  }
  h1 {
    font-size: 2rem;
    color: var(--strong-cyan);
  }
  ul {
    list-style: none;
    li {
      font-size: 12px;
    }
  }
  h2 {
    :hover {
      cursor: pointer;
    }
  }
`;

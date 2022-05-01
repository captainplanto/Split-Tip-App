import React from "react";
import styled from "styled-components";
import {
  tabIndex,
  TipSelectHandler,
  tipColor,
  customTipInput,
} from "../redux/features/TipSlice";
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks";
import ButtonComponent from "./Button.component";
import InputComponent from "./Input.component";

const Tip: { id: number; offer: number }[] = [
  { id: 1, offer: 5 },
  { id: 2, offer: 10 },
  { id: 3, offer: 15 },
  { id: 4, offer: 25 },
  { id: 5, offer: 50 },
];

interface IStyleProps {
  isSelected: any;
}
const SelectTipComponent = () => {
  const numberofpeopleInput = useAppSelector((state) => state.tip);
  const isSelected = useAppSelector((state) => state.tip);
  const dispatch = useAppDispatch();

  const handleTab = (offer: number) => {
    dispatch(tabIndex(offer));
    dispatch(TipSelectHandler());
  };

  const changeState = (offer: number) => {
    dispatch(tipColor(offer));
  };

  return (
    <OuterContainer>
      <h4 className="h4">Select Tip %</h4>
      <TipStyle isSelected={isSelected}>
        {Tip.map(({ id, offer }) => (
          <ButtonComponent
            key={id}
            onClick={() => changeState(offer)}
            style={{
              backgroundColor:
                isSelected.selectedTip === offer
                  ? "var(--strong-cyan)"
                  : "var(--very-dark-cyan)",
              color:
                isSelected.selectedTip === offer
                  ? "var(  --very-dark-cyano98itrtuytrew)"
                  : "var(--White)",
            }}
          >
            <ul onClick={() => handleTab(offer)}>
              <li>{offer}%</li>
            </ul>
          </ButtonComponent>
        ))}

      
          <InputComponent
            style={{
              width: "100%",
              borderRadius: "var(--border-botton-radius)",
            }}
            type="number"
            value={numberofpeopleInput.customTip === 0 ? parseInt('') : numberofpeopleInput.customTip}
            placeholder="Custom"
            onChange={(e) => dispatch(customTipInput(e))}
          />
        
      </TipStyle>
    </OuterContainer>
  );
};

export default SelectTipComponent;
const OuterContainer = styled.div`
  .h4 {
    margin-top: 1rem;
    color: var(--Grayish-cyan);
  }
`;
const TipStyle = styled.div<IStyleProps>`
  width: 70%;
    @media screen and (max-width:820px){
    width: 100%;

  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  margin: 4px 0 1.5rem 0;
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  ul {
    list-style: none;
   
  }
  li {
    :hover {
      cursor: pointer;
    }
  }
  }
`;

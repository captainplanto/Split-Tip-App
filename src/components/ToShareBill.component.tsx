import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks";
import {
  numberOfPersonsInput,
  TipSelectHandler,
} from "../redux/features/TipSlice";
import styled from "styled-components";
import InputComponent from "./Input.component";



const ToShareBillComponent = () => {
  const tipSharing = useAppSelector((state) => state.tip);
  const dispatch = useAppDispatch();
 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   dispatch(TipSelectHandler());
  };

  return (
    <OuterContainer >
      <h4 className="h4">No of people</h4>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h6>{ isNaN(tipSharing.people) ? 'The number of people to share bill cannot be empty' : ''}</h6>
        <InputComponent
          type="number"
          value={tipSharing.people === 0 ? parseInt("") : tipSharing.people}
          placeholder="#"
          onChange={(e) => dispatch(numberOfPersonsInput(e))}
        />
      </form>
    </OuterContainer>
  );
};
export default ToShareBillComponent;
const OuterContainer = styled.div`
  h4 {
    color: var(--Grayish-cyan);
    margin-bottom: 4px;
  }
  @media screen and (max-width: 820px) {
    margin-bottom: 2rem;
  }
  h6 {
    color: red;
    font-size: 10px;
    text-align: center;
    
  }
`;

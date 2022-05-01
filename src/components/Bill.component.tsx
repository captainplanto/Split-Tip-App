import * as React from "react";
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks";
import { amountInput } from "../redux/features/TipSlice";


import InputComponent from "./Input.component";




const BillComponent = () => {
  const tipInput = useAppSelector((state) => state.tip);
  const dispatch = useAppDispatch();

  return (
    <>
      <InputComponent
        type="number"
        value={tipInput.amount === 0 ? parseInt('') : tipInput.amount}
        onChange={ (e) => dispatch(amountInput(e))}
        placeholder="€"
      />
    </>
  );
};

export default BillComponent;

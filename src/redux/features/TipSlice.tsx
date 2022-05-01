import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../stores/store";
import { tipUtils } from "./tips.utils";

interface ITip {
  amount: number;
  people: number;
  tipAmount: number;
  totalAmount: number;
  tabIndex: number;
  customTip: number;
  selectedTip: boolean | number | any;
}

const initialState: ITip = {
  amount: 0,
  people:  0,
  tipAmount: 0,
  totalAmount: 0,
  customTip: 0,
  tabIndex: 0,
  selectedTip: "",
};
export const tipSlice = createSlice({
  name: "tip",
  initialState,
  reducers: {
    amountInput: (
      state,
      action: PayloadAction<
        React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      >
    ) => {
      state.amount = parseInt(action.payload.target.value);
    },

    numberOfPersonsInput: (
      state,
      action: PayloadAction<
        React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      >
    ) => {
      state.people = parseInt(action.payload.target.value);
    },

    customTipInput: (
      state,
      action: PayloadAction<
        React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      >
    ) => {
      state.customTip = parseInt(action.payload.target.value);
    },

    tabIndex: (state, action: PayloadAction<number>) => {
      state.tabIndex = action.payload;
    },

    TipSelectHandler: (state) => {
      if (state.customTip !== 0) {
        tipUtils(state, state.customTip);
      } else {
        tipUtils(state, state.tabIndex);
      }
    },

    tipColor: (state, action: PayloadAction<number>) => {
      state.selectedTip = action.payload;
    },

    tipAppReset: (state) => {
      state.amount = 0;
      state.tipAmount = 0;
      state.totalAmount = 0;
      state.customTip = 0;
      state.people = 0;
    },
  },
});

export const {
  amountInput,
  numberOfPersonsInput,
  customTipInput,
  tipAppReset,
  tabIndex,
  TipSelectHandler,

  tipColor,
} = tipSlice.actions;

export const tip = (state: RootState) => state.tip;
export default tipSlice.reducer;

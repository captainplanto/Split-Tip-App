export const tipUtils = (state: any, percentage: number) => {
  const tip = (percentage * state.amount) / 100;
  state.tipAmount = tip / state.people;
  const totalAmountPerson = state.amount / state.people + state.tipAmount;
  state.totalAmount = totalAmountPerson;

  if (isNaN(state.people)  || state.people === 0) {
    state.tipAmount = 0.0;
    state.totalAmount = 0.0;
  } else {
    state.totalAmount = totalAmountPerson.toFixed(2);
    state.tipAmount = (tip / state.people).toFixed(2);
  }



  if (state.tabIndex === "") {
    const noTip = state.amount / state.people;

    state.totalAmount = noTip;
    state.tipAmount = 0;
  }
};

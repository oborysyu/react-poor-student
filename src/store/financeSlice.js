import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  financialRecords: [],
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    addRecord: (state, action) => {
      state.financialRecords.push({
        id: new Date().toISOString(),
        date: action.payload.date,
        text: action.payload.text,
        amount: action.payload.amount,
        isIncome: action.payload.isIncome,
      });
    },
    removeRecord(state, action) {
      state.financialRecords = state.financialRecords.filter(
        (rec) => rec.id !== action.payload.id
      );
    },
  },
});

const { reducer, actions } = financeSlice;

export const { addRecord, removeRecord } = actions;
export default reducer;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecord } from "../../store/financeSlice";
import styles from "./AddRecord.module.css";

function AddRecord(props) {
  let defaultDate = new Date().toISOString().substring(0, 10);
  const [date, setDate] = useState(defaultDate);
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transType, setTransType] = useState("income");

  const dispatch = useDispatch();

  const addFinancialData = () => {
    if(!amount.length) return;
    dispatch(
      addRecord({
        date: date,
        text: details,
        amount: amount,
        isIncome: transType === "income",
      })
    );
    setDate(defaultDate);
    setAmount("");
    setDetails("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <input
          className={styles.input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className={styles.row}>
          <input
            type="radio"
            id="income"
            name="type"
            value={"income"}
            checked={transType === "income"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <label className={styles.income} htmlFor="income">
            Income
          </label>
          <input
            type="radio"
            id="expense"
            name="type"
            value={"expense"}
            checked={transType === "expense"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <label className={styles.expense} htmlFor="expense">
            Expense
          </label>
        </div>
        <input
          className={styles.input}
          type={"number"}
          step={0.01}
          placeholder="Enter Amount (UAH)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.input}
          type={"text"}
          placeholder="Enter Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <button className={styles.button} onClick={addFinancialData}>
          Add Record
        </button>
      </div>
    </div>
  );
}

export default AddRecord;

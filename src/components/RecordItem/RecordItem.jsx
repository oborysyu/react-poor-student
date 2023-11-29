import { useDispatch } from "react-redux";
import { removeRecord } from "../../store/financeSlice";
import styles from "./RecordItem.module.css";

function RecordItem(props) {
  const dispatch = useDispatch();
  const { item } = props;

  const isIncomeSign = item.isIncome ? "+" : "-";
  return (
    <div className={styles.container}>
      <div>{item.date}</div>
      <div>{item.text}</div>
      <div className={`${styles.value} ${item.isIncome ? styles.income : styles.expense}`}>{isIncomeSign}{parseFloat(item.amount).toFixed(2)}</div>
      <div
        className={styles.removebtn}
        onClick={() => dispatch(removeRecord(item))}
        title="Remove item"
      >
        ✕
      </div>
    </div>
  );
}

export default RecordItem;

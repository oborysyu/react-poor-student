import RecordItem from "../RecordItem/RecordItem";
import styles from "./RecordList.module.css";

function RecordsList(props) {
  const { list } = props;
  return (
    <div className={styles.container}>
      {list.map((item) => (
        <RecordItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default RecordsList;

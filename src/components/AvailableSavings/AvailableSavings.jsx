import styles from "./AvailableSavings.module.css";

function AvailableSavings(props) {
    const {dollarRate, euroRate, result} = props;
    return (
        <div className={styles.container}>
            <div className={styles.lbl}>Available Savings</div>
            <div className={`${styles.resultitem} ${Number(result) > 0 ? styles.positive : styles.negative}`}>{result} ₴</div>
            or
            <div className={`${styles.resultitem} ${Number(result) > 0 ? styles.positive : styles.negative}`}>{parseFloat(result/dollarRate).toFixed(2)} $</div>
            or
            <div className={`${styles.resultitem} ${Number(result) > 0 ? styles.positive : styles.negative}`}>{parseFloat(result/euroRate).toFixed(2)} €</div>
        </div>
    );
}

export default AvailableSavings;
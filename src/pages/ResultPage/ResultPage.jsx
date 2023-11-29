import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AvailableSavings from "../../components/AvailableSavings/AvailableSavings";
import { bank_url } from "../../config";
import styles from "./ResultPage.module.css";
import FinanceTable from "../../components/FinanceTable/FinanceTable";

function ResultPage(props) {
  const [euroRate, setEuroRate] = useState(0);
  const [dollarRate, setDollarRate] = useState(0);
  const [totalResult, setTotalResult] = useState(0);

  const [list] = useSelector((state) => {
    const { finance } = state;
    return [finance.financialRecords];
  });

  const getResult = () => {
    return list.reduce((accumulator, currentValue) => {
      return currentValue.isIncome
        ? accumulator + Number(currentValue.amount)
        : accumulator - Number(currentValue.amount);
    }, 0);
  };

  useEffect(() => {
    fetch(bank_url)
      .then((response) => response.json())
      .then((data) => {
        setDollarRate(data.find((obj) => obj.r030 === 840).rate);
        setEuroRate(data.find((obj) => obj.r030 === 978).rate);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.rates}>
        <div>1$ = {euroRate}₴</div>
        <div>1€ = {dollarRate}₴</div>
      </div>
      <AvailableSavings
        euroRate={euroRate}
        dollarRate={dollarRate}
        result={getResult()}
      />
      <FinanceTable data={list} euroRate={euroRate} dollarRate={dollarRate}/>
    </div>
  );
}

export default ResultPage;

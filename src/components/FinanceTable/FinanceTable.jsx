import { useEffect, useState } from "react";
import styles from "./FinanceTable.module.css";

function FinanceTable(props) {
  const { data, euroRate, dollarRate } = props;
  const [parsedData, setParsedData] = useState([]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const list = [...data];
    list.sort((a, b) => new Date(a.date) - new Date(b.date));
    //parsing data list and get results for each month
    const summary = list.reduce((res, el) => {
      const year = new Date(el.date).getFullYear();
      const month = new Date(el.date).getMonth() + 1;
      if (!res[`${year}-${month}`]) res[`${year}-${month}`] = {};
    //   res[`${year}-${month}`].month = `${year}-${month}`;
      res[`${year}-${month}`].monthname =`${monthNames[month-1]} of ${year}`;
      res[`${year}-${month}`].incomes =
        (res[`${year}-${month}`].incomes || 0) +
        (el.isIncome ? Number(el.amount) : 0);
      res[`${year}-${month}`].expenses =
        (res[`${year}-${month}`].expenses || 0) +
        (el.isIncome ? 0 : Number(el.amount));
      res[`${year}-${month}`].savings =
        Number(res[`${year}-${month}`].incomes) -
        Number(res[`${year}-${month}`].expenses);
      return res;
    }, {});
    setParsedData(Object.values(summary));
  }, [data]);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Month</th>
            <th>Incomes(₴)</th>
            <th>Expenses(₴)</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          {parsedData?.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.monthname}</td>
              <td>{item.incomes}</td>
              <td>{item.expenses}</td>
              <td><b>{item.savings}₴</b> (or {parseFloat(item.savings/dollarRate).toFixed(2)}$; or {parseFloat(item.savings/euroRate).toFixed(2)}€)</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FinanceTable;

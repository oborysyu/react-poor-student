import { useSelector } from "react-redux";
import AddRecord from "../../components/AddRecord/AddRecord";
import RecordsList from "../../components/RecordsList/RecordsList";

function SettingsPage() {
  const list = useSelector((state) => state.finance.financialRecords);
  return (
    <>
      <AddRecord />
      <RecordsList list={list} />
    </>
  );
}

export default SettingsPage;

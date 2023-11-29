import { useSelector } from "react-redux";
import AddRecord from "../../components/AddRecord/AddRecord";
import RecordsList from "../../components/RecordsList/RecordsList";

function SettingsPage(props) {
    const list = useSelector(
        (state) => state.finance.financialRecords
      );
    return (
        // <div>
        //     This is main page!!!
        // </div>
        <>
            <AddRecord/>
            <RecordsList list={list}/>
        </>
    );
}

export default SettingsPage;
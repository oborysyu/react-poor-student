import styles from "./InstructionsPage.module.css";

function InstructionsPage() {
  return (
    <div className={styles.container}>
      <p>
        This page contains instructions for using this application.
        <br />
        This application is written in React; reduxjs/toolkit is used as a state
        manager.
        <br />
        It would be possible to write data to the browser's local storage, but
        here the data is not saved that way; those. Reloading the page in the
        browser will result in the loss of previously entered data.
      </p>

      <p>
        How to use the application:
        <br />
        1. first, you should log into the application using a known username and
        password;
        <br />
        2. the panel at the top of the screen is used for navigation; Clicking
        on the name of the desired page takes you there;
        <br />
        3. on the “settings” page you can create financial records using a small
        form;
        <br />
        3.1 to enter data about a financial record, you must select the event
        date, event type (income or expense), amount (this is a required field!)
        and a small comment (this field is optional);
        <br />
        3.2 below the input form (as you fill it out) a list of financial
        records is displayed;
        <br />
        3.3 any of these entries can be deleted by clicking on the red button;
        <br />
        4. to view the results of financial activities, you need to go to the
        “results” page;
        <br />
        4.1 this page displays exchange rates (as of the current date), as well
        as a table with summarized financial data by month;
        <br />
        5. to exit the application you need to click the “exit” button on the
        navigation panel.
      </p>
    </div>
  );
}

export default InstructionsPage;

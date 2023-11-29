import styles from "./DevPage.module.css";
function DevPage() {
  return (
    <div className={styles.container}>
      Here is information about developer.
      <br />
      <p>
        Developer: <b>Oleksandr Borysiuk</b>
        <br />
        <a href="https://github.com/oborysyu" target="_blank" rel="noreferrer">Git is here!</a>
        <br />
        <a href="https://dochub.com/alexander-borysiuk/mqNjP3BVW1XkkL8R9yGzLk/cv-oleksandr-borysiuk-pdf" target="_blank" rel="noreferrer">CV is here!</a>
      </p>
      <p>
        Allow me to present your technical skills that could be useful for your
        company. I have experience in JavaScript for more than 8 years, which
        allows me to confidently perform tasks of any complexity. I know HTML,
        CSS, JavaScript (React, Redux), which allows me to create large-scale
        and dynamic web applications. I know the principles of OOP and SOLID,
        which allows me to develop software with a high degree of stability and
        extensibility. As an initiative and team player, I am always ready to
        join the project and help in its implementation. Thanks!
      </p>
    </div>
  );
}

export default DevPage;

import styles from "./styles.module.scss";

function Accordion({ question, answer, handleClick, open }) {
  return (
    <div className={styles.wrap}>
      <button className={styles.button} onClick={handleClick}>
        {open ? "v" : ">"}
        <div>{question}</div>
      </button>
      {open ? <div className={styles.element}>{answer}</div> : null}
    </div>
  );
}

export default Accordion;

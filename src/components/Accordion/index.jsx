import styles from "./styles.module.scss";

function Accordion({ question, answer, handleClick, open }) {
  return (
    <div className={styles.wrap}>
      <button className={styles.button} onClick={handleClick}>
        {open ? "👇" : "👉"}
        <div className={styles.question}>{question}</div>
      </button>
      {open ? <div className={styles.answer}>{answer}</div> : null}
    </div>
  );
}

export default Accordion;

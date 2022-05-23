import styles from "./styles.module.scss";

function Accordion({ question, answer, handleClick, open }) {
  console.log(open, "open");
  return (
    <div>
      <div className={styles.wrap}>
        <button className={styles.button} onClick={handleClick}>
          {open ? "👇" : "👉"}
          <div className={styles.question}>{question}</div>
        </button>
        {open ? <div className={styles.answer}>{answer}</div> : null}
      </div>

      {/* semantic meaning */}
      {/* <div className={styles.wrap}>
        <details
          open={open ? true : null}
          onClick={(e) => {
            e.preventDefault();
            handleClick(e);
          }}
        >
          <summary>{question}</summary>
          <div className={styles.answer}>{answer}</div>
        </details>
      </div> */}
    </div>
  );
}

export default Accordion;

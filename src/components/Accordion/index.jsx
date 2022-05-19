import { useState } from "react";
import styles from "./styles.module.scss";

function Accordion({ question, answer }) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.wrap}>
      <button className={styles.button} onClick={() => setActive(!active)}>
        {active ? "v" : ">"}
        <div>{question}</div>
      </button>

      {active ? <div className={styles.element}>{answer}</div> : null}
    </div>
  );
}

export default Accordion;

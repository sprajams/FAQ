import { useState } from "react";
import Accordion from "../Accordion";

function AccordionGroup() {
  const [activeIndex, setActiveIndex] = useState(0);
  let arrInfo = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];

  return (
    <div>
      {arrInfo.map((x, index) => {
        const handleClick = () => {
          setActiveIndex(index);
        };
        return (
          <Accordion
            question={x.question}
            answer={x.answer}
            key={index}
            handleClick={handleClick}
            open={activeIndex === index}
          />
        );
      })}
    </div>
  );
}

export default AccordionGroup;

import clsx from "clsx";
import { useState } from "react";

const faqs = [
  {
    question: "Why should I jump into Meme Space?",
    answer: `Meme Space is where crypto and memes collide to create awhole new universe of
          opportunities! Join us to earn, explore, and be part of a unique community that's here to
          grow together. Get in now and be one of the early adventurers — it's the perfect time to
          dive in!`,
  },
  {
    question: "How can I start earning in Meme Space?",
    answer: "How can I start earning in Meme Space?",
  },
  {
    question: "What makes $MEMES so special?",
    answer: "What makes $MEMES so special?",
  },
  {
    question: "What's the Meme Fund, and how does it work for me?",
    answer: "What's the Meme Fund, and how does it work for me?",
  },
  {
    question: "Why join the presale now?",
    answer: "Why join the presale now?",
  },
];

export const Accordion = () => {
  const [currentItem, setCurrentItem] = useState<number>();

  return (
    <div className="w-full flex flex-col gap-4">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="flex flex-col gap-3">
          <div
            onClick={() => setCurrentItem((item) => (item === index ? undefined : index))}
            className="flex items-center justify-between w-full text-[#FCAF54] cursor-pointer text-2xl"
          >
            <span>{`${index + 1}. ${faq.question}`}</span>
            <span>{(currentItem === index && "-") || "+"}</span>
          </div>
          <div
            className={clsx(
              "grid overflow-hidden transition-all duration-300 ease-in-out text-white",
              currentItem === index && "grid-rows-[1fr] opacity-100",
              currentItem !== index && "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

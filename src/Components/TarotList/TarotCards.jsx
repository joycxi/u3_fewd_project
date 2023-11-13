import { useState } from "react";

const TarotCards = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);
  console.log(expand);

  return (
    <div className="accordion">
      <button className="yourMama" onClick={toggleExpand}>
        Tarot <span>{expand ? "-" : "+"}</span>
      </button>
      {expand && (
        <div className="tarotCards">
          <li>props.name</li>
        </div>
      )}
    </div>
  );
};

export default TarotCards;

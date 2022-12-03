import styles from "./card.module.css";
import { useEffect, useState } from "react";
import { BsPatchQuestionFill } from "react-icons/bs";

function Card({
  img,
  name,
  id,
  setClickedCards,
  index,
  setCardIndex,
  prevIndex,
  setPrevIndex,
  solvedMemories,
  flippedCards,
  memorySize,
}) {
  const [flip, setFlip] = useState(false);
  const [showInfoButton, setShowInfoButton] = useState(false);
  useEffect(() => {
    setFlip(flippedCards[index]);
    if (solvedMemories.includes(index)) {
      setShowInfoButton(true);
    } else {
      setShowInfoButton(false);
    }
    // eslint-disable-next-line
  }, [flippedCards]);

  function handleClick() {
    if (prevIndex !== index) {
      if (!solvedMemories.includes(index)) {
        setFlip((prev) => !prev);
        setClickedCards((prev) => [...prev, id]);
        setCardIndex((prev) => [...prev, index]);
        setPrevIndex(index);
      }
    }
  }
  return (
    <div
      className={memorySize > 11 ? `${styles.card}` : `${styles.cardx8}`}
      onClick={handleClick}
    >
      <div
        className={
          flip
            ? `${styles.innerCard} ${styles.isFlipped}`
            : `${styles.innerCard}`
        }
      >
        <div className={`${styles.cardFace} ${styles.cardFaceFront}`}></div>
        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
          <img className={styles.cardImg} src={img} alt={name} />
          {showInfoButton && (
            <div className={styles.more}>
              <BsPatchQuestionFill />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Card;

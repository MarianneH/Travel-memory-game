import styles from "./rules.module.css";

function Rules() {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <h2 className={styles.headline}>Travel-Memory-Game</h2>
        <p className={styles.introduction}>
          You dont know where to spend your next holidays at? No problem, we
          will help you making that decision.
          <br /> With our Travel Memory Game we provide you with some beautiful
          places to visit around the world and you will also have fun to explore
          them over a round of memory.
        </p>
      </div>
      <div className={styles.sub_container}>
        <h2 className={styles.headline}> Here are the rules:</h2>
        <p>The objective is to collect all pairs of cards.</p>
        <p>
          Every turn you will turn two cards face up.
          <br /> If they match you get a point.
          <br />
          If they don't match, they're being turned face down again.
          <br />
          You have won once all pairs are found and all cards are facing
          upwards.
        </p>
      </div>
    </div>
  );
}
export default Rules;

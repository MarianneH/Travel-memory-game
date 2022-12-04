import { useEffect } from "react";
import styles from "./infoModal.module.css";

function InfoModal({ setShowModal, data }) {
  const { img, name, info } = data[0];

  function handleClick() {
    setShowModal(false);
    document.body.style.overflow = "scroll";
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [data]);
  return (
    <>
      <div className={styles.modal_container} onClick={handleClick}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <div className={styles.header_text}>Learn more about</div>
            <div onClick={handleClick} className={styles.header_x}>
              &#10005;
            </div>
          </div>
          {data && (
            <div className={styles.modal_content}>
              <h1 className={styles.headline}>{name}</h1>
              <div className={styles.data_container}>
                <div className={styles.image}>
                  <img src={img} alt={name} />
                </div>
                <div className={styles.summary}>{info}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default InfoModal;

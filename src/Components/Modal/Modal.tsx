import React from "react";

import styles from "../../styles/modal.module.css";

function Modal(props: any) {
  return (
    <div
      className={styles.modal}
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div
        className={`${styles.modal_content} ${styles.custom_scroll}`}
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;

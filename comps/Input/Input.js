import React from "react";
import styles from "../../styles/Input.module.css";
export default function Input({ placeholder }) {
    return (
        <input
            type="text"
            className={styles.inputElem}
            placeholder={placeholder}
        />
    );
}

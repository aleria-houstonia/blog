import React from "react";
import styles from "../../styles/Input.module.css";
export default function Input({ placeholder, name }) {
    return (
        <input
            type="text"
            className={styles.inputElem}
            placeholder={placeholder}
            name={name}
        />
    );
}

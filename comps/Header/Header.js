import React from "react";
import Battery from "../Battery";
import Cellular from "../Cellular";
import Wifi from "../Wifi";
import styles from "../../styles/Header.module.css";
export default function Header() {
    return (
        <div className={styles.head}>
            <div className="left">
                <div className="time">4:20</div>
            </div>
            <div className={styles.right}>
                <div className="CelConnect">
                    <Cellular />
                </div>
                <div className={styles.Wifi}>
                    <Wifi />
                </div>
                <div className="Battery">
                    <Battery />
                </div>
            </div>
        </div>
    );
}

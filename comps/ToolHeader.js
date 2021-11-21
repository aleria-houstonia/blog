import React from "react";
import Back from "./Back";
import EditLogo from "./EditLogo";
import Logo from "./Logo";
import styles from "../styles/ToolHeader.module.css";
const ToolHeader = () => {
    return (
        <div className={styles.main}>
            <img
                className={styles.imgTool}
                src="http://s1.iconbird.com/ico/2013/9/450/w256h2561380453931User256x25632.png"
            />
            <Logo />
            <EditLogo />
        </div>
    );
};

export default ToolHeader;

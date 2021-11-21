import Back from "./Back";
import EditLogo from "./EditLogo";
import Logo from "./Logo";
import styles from "../styles/ToolHeader.module.css";
const ToolHeader = () => {
    return (
        <div className={styles.main}>
            <Back />
            <Logo />
            <EditLogo />
        </div>
    );
};

export default ToolHeader;

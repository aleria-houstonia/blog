import Footer from "./Footer";
import Header from "./Header/Header";
import styles from "../styles/MainContainer.module.scss";
const MainContainer = ({ children }) => {
    return (
        <div className={styles.main}>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default MainContainer;

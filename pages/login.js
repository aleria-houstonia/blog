import Button from "../comps/Button/Button";
import Input from "../comps/Input/Input";
import Logo from "../comps/Logo";
import styles from "../styles/Login.module.scss";
import MainContainer from "../comps/MainContainer";
const Login = () => {
    return (
        <>
            <MainContainer>
                <div className={styles.loginCenter}>
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className={styles.title1}>Войдите</div>
                    <div className={styles.title2}>
                        Авторизируйтесь, с помощью логина
                    </div>
                    <div className="form">
                        <div className={styles.loginTitle}>Логин</div>
                        <Input placeholder="Введите логин" />
                        <div className={styles.loginTitle}>Пароль</div>
                        <Input placeholder="Введите пароль" />
                        <div className={styles.loginBtn}>
                            <Button text="Войти" />
                        </div>
                    </div>
                </div>
            </MainContainer>
        </>
    );
};

export default Login;

import React from "react";
import Button from "../comps/Button/Button";
import Input from "../comps/Input/Input";
import Logo from "../comps/Logo";
import styles from "../styles/Login.module.scss";
import MainContainer from "../comps/MainContainer";
import axios from "axios";
import useAxios from "axios-hooks";
//user1 111111
const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formEntries = new FormData(event.currentTarget).entries();
        const formData = Object.assign(
            ...Array.from(formEntries, ([name, value]) => ({ [name]: value }))
        );

        let newUser = JSON.stringify(formData);
        console.log(newUser);
        postUser(newUser);
    };

    const postUser = (newUser) => {
        // const [{ data, loading, error }, execute] = useAxios(
        //     {
        //         method: "POST",
        //         baseURL: "https://m-blog.volki.digital",
        //         url: "/api/v1/user/auth",
        //     },
        //     { manual: true }
        // );
        // executePost(newUser);

        axios
            .post(
                "https://m-blog.volki.digital/api/v1/user/auth",
                newUser,

                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Basic Og==",
                    },
                }
            )
            .then((res) => {
                localStorage.setItem("mytoken", res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
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
                    <form className="form" onSubmit={handleSubmit}>
                        <div className={styles.loginTitle}>Логин</div>
                        <Input placeholder="Введите логин" name="nickname" />
                        <div className={styles.loginTitle}>Пароль</div>
                        <Input placeholder="Введите пароль" name="password" />
                        <div className={styles.loginBtn}>
                            <Button text="Войти" type="submit" />
                        </div>
                    </form>
                </div>
            </MainContainer>
        </>
    );
};

export default Login;

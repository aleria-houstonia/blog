import React from 'react';
import axios from 'axios';
import API from 'lib/api';
import { Button } from 'Components/Button';
import { Input } from 'Components/Input';
import { MainContainer } from 'Components/MainContainer';
import styles from 'styles/Login.module.scss';
import { Logo } from 'Components/Logo';

const postUser = (newUser) => {
    axios
        .post(
            `${API}/api/v1/user/auth`,
            newUser,

            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic Og==',
                },
            }
        )
        .then((res) => {
            localStorage.setItem('mytoken', res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};
const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formEntries = new FormData(event.currentTarget).entries();
        const formData = Object.assign(
            ...Array.from(formEntries, ([name, value]) => ({ [name]: value }))
        );

        const newUser = JSON.stringify(formData);
        postUser(newUser);
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

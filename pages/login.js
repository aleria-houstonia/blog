import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import { Button } from 'Components/Button';
import { MainContainer } from 'Components/MainContainer';
import styles from 'styles/Login.module.scss';
import { Logo } from 'Components/Logo';
import style from 'styles/Input.module.css';
import API from 'lib/api';


const postUser = newUser => {
    axios
        .post(
            `${API}/api/v1/user/auth`,
            newUser,

            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic Og==',
                },
            },
        )
        .then(res => {
            localStorage.setItem('mytoken', res.data);
        })
        .catch(error => {
            console.log(error);
        });
};
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        const newUser = JSON.stringify(data);
        postUser(newUser);
    };

    return (
        <>
            <MainContainer>
                <div className={styles.loginCenter}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>

                    <div className={styles.title1}>Войдите</div>
                    <div className={styles.title2}>
                        Авторизируйтесь, с помощью почты
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.loginInpDesc}>Почта</div>
                        <div className={styles.divInp}>
                        <input
                            className={style.inputElem}
                            placeholder="Введите логин"
                            {...register('nickname')}
                        />
                        </div>
                        <div className={styles.loginInpDesc}>Пароль</div>
                        <div className={styles.divInp}>
                        <input
                            className={style.inputElem}
                            placeholder="Введите пароль"
                            {...register('password', { required: true })}
                        /></div>
                        {errors.exampleRequired && (
                            <span>This field is required</span>
                        )}
                        <Link href="/">
                            <div className={styles.loginBtn}>
                                 <Button text="Войти" type="submit" />
                            </div>
                        </Link>
                        <div className={styles.text}>
                            <Link href="/signup">Создать аккаунт</Link>
                        </div>

                    </form>
                </div>
            </MainContainer>
        </>
    );
};

export default Login;

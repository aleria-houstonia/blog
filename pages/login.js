import React from 'react';
import axios from 'axios';
import API from 'lib/api';
import { Button } from 'Components/Button';
import { MainContainer } from 'Components/MainContainer';
import styles from 'styles/Login.module.scss';
import { Logo } from 'Components/Logo';
import { useForm } from 'react-hook-form';
import style from 'styles/Input.module.css';
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
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const newUser = JSON.stringify(data);
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

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className={style.inputElem}
                            placeholder="Введите логин"
                            {...register('nickname')}
                        />
                        <input
                            className={style.inputElem}
                            placeholder="Введите пароль"
                            {...register('password', { required: true })}
                        />
                        {errors.exampleRequired && (
                            <span>This field is required</span>
                        )}

                        <Button text="Войти" type="submit" />
                    </form>
                </div>
            </MainContainer>
        </>
    );
};

export default Login;

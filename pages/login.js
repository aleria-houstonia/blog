import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import { Button } from 'Components/Button';
import { Input } from 'Components/Input';
import { MainContainer } from 'Components/MainContainer';
import styles from 'styles/Login.module.scss';
import { Logo } from 'Components/Logo';
import { postUser } from 'lib';

const Login = () => {
    const { handleSubmit, control } = useForm();
    function onSubmit(data) {
        const newUser = JSON.stringify(data);
        postUser(newUser);
    }

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

                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className={styles.loginInpDesc}>Почта</div>
                        <div className={styles.divInp}>
                            <Input
                                control={control}
                                name="nickname"
                                placeholder="Введите логин"
                            />
                        </div>
                        <div className={styles.loginInpDesc}>Пароль</div>
                        <div className={styles.divInp}>
                            <Input
                                control={control}
                                name="password"
                                placeholder="Введите пароль"
                            />
                        </div>
                        {/* <Link href="/"> */}
                        <div className={styles.loginBtn}>
                            <Button text="Войти" type="submit" />
                        </div>
                        {/* </Link> */}
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

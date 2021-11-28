import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import { Button } from 'Components/Button';
import { MainContainer } from 'Components/MainContainer';
import { Input } from 'Components/Input';
import { Logo } from 'Components/Logo';
import styles from 'styles/Signup.module.scss';

import { postNewUser } from '../lib';

const Signup = () => (
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        const newUser = JSON.stringify(data);
        postNewUser(newUser);
    };

    return (
        <>
            <MainContainer>
                <div className={styles.loginCenter}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>

                    <div className={styles.title1}>Зарегистрируйтесь</div>
                    <div className={styles.title2}>
                        Зарегистрируйтесь, с помощью почты
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
                                {...register('nickname')}
                            />
                        </div>
                        <div className={styles.loginBtn}>
                            <Link href="/">
                                <Button text="Зарегистрироваться" type="submit" />
                            </Link> ;
                        </div>
                        <div className={styles.text}>
                            <Link href="/login">Уже есть аккаунт? </Link>
                        </div>
                    </form>
                </div>
            </MainContainer>
        </>
    );


export default Signup;

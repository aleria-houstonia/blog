import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { postNewUser } from 'lib';
import { Button } from 'Components/Button';
import { Input } from 'Components/Input';
import { MainContainer } from 'Components/MainContainer';
import styles from 'styles/Pages/Login.module.scss';
import { Logo } from 'Components/Icon/Logo';

const Signup = () => {
    const { handleSubmit, control } = useForm();
    const router = useRouter();
    function onSubmit(data) {
        const newUser = JSON.stringify(data);
        postNewUser(newUser, router);
    }

    return (
        <div>
            <MainContainer>
                <div className={styles.loginCenter}>
                    <div className={styles.logo}>
                        <div onClick={() => router.push('/')}>
                            <Logo />
                        </div>
                    </div>

                    <div className={styles.title1}>Зарегистрируйтесь</div>
                    <div className={styles.title2}>
                        Зарегистрируйтесь, с помощью почты
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <div className={styles.loginBtn}>
                            <Link href="/" passHref>
                                <Button
                                    text="Зарегистрироваться"
                                    type="submit"
                                />
                            </Link>
                            ;
                        </div>
                        <div className={styles.text}>
                            <Link href="/login">Уже есть аккаунт? </Link>
                        </div>
                    </form>
                </div>
            </MainContainer>
        </div>
    );
};

export default Signup;

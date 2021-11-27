import React from 'react';
import Link from 'next/link';

import { Input } from 'Components/Input';
import { Logo } from 'Components/Logo';
import styles from 'styles/Signup.module.scss';
import { Button } from 'Components/Button';
import { MainContainer } from 'Components/MainContainer'

const Signup = () => (
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
        <form>
            <div className={styles.loginInpDesc}>Почта</div>
            <div className={styles.divInp}>
            <Input
                placeholder="Введите логин"
            />
            </div>
            <div className={styles.loginInpDesc}>Пароль</div>
            <div className={styles.divInp}>
            <Input
                placeholder="Введите пароль"
            />
            </div>
            <div className={styles.loginBtn}>
                <Link href="/">
                    <Button text="Зарегистрироваться" type="submit" />
                </Link>
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

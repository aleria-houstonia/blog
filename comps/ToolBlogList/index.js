import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Back } from 'Components/Icon/Back';
import { EditLogo } from 'Components/Icon/EditLogo';
import { Logo } from 'Components/Icon/Logo';
import styles from 'styles/ToolHeader.module.css';

export function ToolHeader() {
    const router = useRouter();
    function checkToken() {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('mytoken');
            const res = token !== null;
            return res;
        }
        return false;
    }
    return (
        <div className={styles.main}>
            <Link href="/" passHref>
                <Back />
            </Link>
            <Logo />
            {router.asPath === '/add' ? (
                <div />
            ) : checkToken ? (
                <div />
            ) : (
                <EditLogo />
            )}
        </div>
    );
}

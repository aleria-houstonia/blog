import React from 'react';
import { Back } from 'Components/Back';
import { EditLogo } from 'Components/EditLogo';
import { Logo } from 'Components/Logo';
import styles from 'styles/ToolHeader.module.css';
import Link from 'next/link';

export const ToolHeader = () => {
    return (
        <div className={styles.main}>
            <Link href="/">
                <Back />
            </Link>
            <Logo />
            <EditLogo />
        </div>
    );
};

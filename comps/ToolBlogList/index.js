import React from 'react';
import { useRouter } from 'next/router';

import { Back } from 'Components/Icon/Back';
import { EditLogo } from 'Components/Icon/EditLogo';
import { Logo } from 'Components/Icon/Logo';
import styles from 'styles/Comps/ToolHeader.module.css';
import { checkToken } from 'lib';

export function ToolBlogList({ id }) {
    const router = useRouter();
    return (
        <div className={styles.main}>
            <div
                onClick={() => {
                    router.back();
                }}
            >
                <Back />
            </div>

            <Logo />
            {router.asPath === '/add' ? (
                <div />
            ) : checkToken() ? (
                <div
                    onClick={() => {
                        router.push(`/edit/${id}`);
                    }}
                >
                    <EditLogo />
                </div>
            ) : (
                <div />
            )}
        </div>
    );
}

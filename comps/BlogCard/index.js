import React from 'react';

import styles from 'styles/BlogCard.module.css';

export const BlogCard = ({ title = 'Мордва', body = 'jwq' }) => (
    <div className={styles.blogCard}>
        <div className={styles.blogTitleImg}>
            <img src="http://almode.ru/uploads/posts/2021-03/1615880258_58-p-natsionalnaya-odezhda-mordva-erzya-63.jpg" />
        </div>
        <div className={styles.blogCardTitle}>{title}</div>
        <div className={styles.blogCardDescription}>{body}</div>
    </div>
);

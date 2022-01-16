import React from 'react';
import { Markup } from 'interweave';

import styles from 'styles/Comps/BlogCard.module.css';

export const BlogCard = ({ title = 'Мордва', body = 'jwq' }) => (
    <div className={styles.blogCard}>
        <div className={styles.blogTitleImg}>
            <img
                className="main-img"
                src="https://image.winudf.com/v2/image/Y29tLnNydC50cmFja2Rpc3RyaWJ1dGlvbmFwcF9zY3JlZW5fMV9tOHJndTQyMw/screen-1.jpg?h=710&fakeurl=1&type=.jpg"
            />
        </div>
        <div className={styles.blogCardTitle}>{title}</div>
        <div className={styles.blogCardDescription}>
            <Markup content={body} />
        </div>
    </div>
);

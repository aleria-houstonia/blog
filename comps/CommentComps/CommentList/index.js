import React from 'react';

import styles from 'styles/Comps/Comments.module.css';
import { CommentElem } from 'Components/CommentComps/CommentElem';
import { CommentAdd } from 'Components/CommentComps/CommentAdd';

export const CommentList = ({ postId }) => (
    <div className={styles.commComp}>
        <div className={styles.commCount}>144 Комментария</div>
        <CommentAdd postId={postId} />
        <CommentElem id={postId} />
    </div>
);

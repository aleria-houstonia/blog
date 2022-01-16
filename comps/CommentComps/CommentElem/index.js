import React from 'react';

import styles from 'styles/Comps/Comments.module.css';
import { deleteComment } from 'lib';
import { Close } from 'Components/Icon/Close';

export const CommentElem = ({
    id,
    nick = 'тестер',
    text = 'Не следует, однако забывать, что реализация намеченных плановых заданий требуют определения и уточнения дальнейших направлений развития.',
}) => (
    <div className={styles.commElem}>
        <div className={styles.top}>
            <div className={styles.topComm}>
                <div className={styles.avatar}>
                    <img src="https://www.pngkey.com/png/detail/230-2301779_best-classified-apps-default-user-profile.png" />
                </div>
                <div>
                    <div className={styles.nickname}>{nick}</div>
                    <div className={styles.commTime}>12 мин назад</div>
                </div>
            </div>
            <div onClick={() => deleteComment(id)}>
                <Close />
            </div>
        </div>
        <div className={styles.commText}>{text}</div>
    </div>
);

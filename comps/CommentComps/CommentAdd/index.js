import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

import API from 'lib/api';
import { getToken } from 'lib';
import styles from 'styles/Comps/Comments.module.css';

export const CommentAdd = ({ postId }) => {
    const [comment, setComment] = useState({});
    const token = getToken();
    const decoded = jwt_decode(token);
    const data = Object.values(decoded);
    console.log(decoded);
    function setComm(e) {
        const newComm = {
            message: e.target.value,
            nickname: data[1],
            postId,
            parentId: data[0],
        };
        setComment(newComm);
    }
    function addComm(comm) {
        console.log(comm);
        const token = getToken();
        axios.post(`${API}/api/v1/comments`, comm, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
    }
    return (
        <div className={styles.commAdd}>
            <textarea
                onChange={setComm}
                className={styles.commInp}
                placeholder="Написать комментарий"
            />
            <div className={styles.blockBtn}>
                <button
                    type="button"
                    onClick={() => addComm(JSON.stringify(comment))}
                    className={styles.commBtn}
                >
                    Отправить
                </button>
            </div>
        </div>
    );
};

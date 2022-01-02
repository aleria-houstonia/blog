import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Markup } from 'interweave';

import API from 'lib/api';
import styles from 'styles/BlogDesc.module.css';
import { MainContainer } from 'Components/MainContainer';
import { ToolBlogList } from 'Components/ToolBlogList';

export default function () {
    const { query } = useRouter();
    const [details, setDetails] = useState({});
    async function getDetails(id) {
        const { data } = await axios(`${API}/api/v1/post/${id}`);
        setDetails(data);
    }

    useEffect(() => {
        getDetails(query.id);
    }, []);
    console.log(details);
    return (
        <MainContainer>
            <div className={styles.blogDesc}>
                <ToolBlogList id={query.id} />
                <div className={styles.blogDescImg}>
                    <img src="http://almode.ru/uploads/posts/2021-03/1615880258_58-p-natsionalnaya-odezhda-mordva-erzya-63.jpg" />
                </div>
                <div className={styles.blogDescTitle}>{details.title}</div>
                <div className={styles.blogDescText}>
                    <Markup
                        content={details.body}
                        className={styles.blogDescText}
                    />
                </div>
            </div>
        </MainContainer>
    );
}

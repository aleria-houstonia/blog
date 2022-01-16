import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Markup } from 'interweave';

import API from 'lib/api';
import styles from 'styles/Pages/BlogDesc.module.css';
import { MainContainer } from 'Components/MainContainer';
import { ToolBlogList } from 'Components/ToolBlogList';
import { CommentList } from 'Components/CommentComps/CommentList';

export default function () {
    const { query } = useRouter();
    const [details, setDetails] = useState({});
    async function getComm(id) {
        const { data } = await axios(`${API}/api/v1/comments?postId=${id}`);
        console.log(data);
    }
    async function getDetails(id) {
        const { data } = await axios(`${API}/api/v1/post/${id}`);
        setDetails(data);
        getComm(id);
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
                    <img src="https://image.winudf.com/v2/image/Y29tLnNydC50cmFja2Rpc3RyaWJ1dGlvbmFwcF9zY3JlZW5fMV9tOHJndTQyMw/screen-1.jpg?h=710&fakeurl=1&type=.jpg" />
                </div>
                <div className={styles.blogDescTitle}>{details.title}</div>
                <div className={styles.blogDescText}>
                    <Markup
                        content={details.body}
                        className={styles.blogDescText}
                    />
                </div>
                <CommentList postId={query.id} />
            </div>
        </MainContainer>
    );
}

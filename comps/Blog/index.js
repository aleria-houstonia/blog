import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import API from 'lib/api';
import { BlogCard } from 'Components/BlogCard';
import { Button } from 'Components/Button';
import { ToolHeader } from 'Components/ToolHeader';
import { MyInp } from 'Components/Inp';
import styles from 'styles/Comps/Blog.module.css';

export const Blog = () => {
    const [blogCards, setBlogCards] = useState([]);
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(true);

    async function getPost() {
        const { data } = await axios(
            `${API}/api/v1/post?page=1&count=${count}`
        );
        setBlogCards(data);
    }
    useEffect(() => {
        getPost();
    }, []);
    useEffect(() => {
        getPost();
    }, [count]);

    async function changeCount() {
        const resPag = await axios(`${API}/api/v1/post?page=1&count=${count}`);
        if (count <= resPag.data.length) setCount(1 + count);
        else setShow(false);
    }
    async function searchProducts(searchvalue) {
        const { data } = await axios(
            `${API}/api/v1/post/search?searchData=${searchvalue}`
        );
        setBlogCards(data);
        if (searchvalue.length === 0) getPost();
    }

    return (
        <div>
            <div className={styles.blogList}>
                <ToolHeader />
                <div className={styles.blogSearch}>
                    <MyInp
                        placeholder="Поиск по постам"
                        name="searchvalue"
                        handleEvent={(e) => searchProducts(e.target.value)}
                    />
                </div>
                <div className={styles.blogCardList}>
                    {blogCards.length === 0 ? (
                        <div className={styles.state}> no elem</div>
                    ) : (
                        blogCards.map((card) => (
                            <Link
                                href={`/myblog/${card.id}`}
                                passHref
                                key={card.id}
                            >
                                <div>
                                    <BlogCard
                                        title={card.title}
                                        body={card.preview}
                                        key={card.id}
                                    />
                                </div>
                            </Link>
                        ))
                    )}
                </div>
                <div className={styles.blogDownload}>
                    {show ? (
                        <Button
                            text="Загрузить еще"
                            type="button"
                            handleEvent={() => changeCount()}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import API from 'lib/api';
import { BlogCard } from 'Components/BlogCard';
import { Button } from 'Components/Button';
import { Input } from 'Components/Input';
import { ToolHeader } from 'Components/ToolHeader';
import styles from 'styles/Blog.module.css';

export const Blog = () => {
    const [blogCards, setBlogCards] = useState([]);
    async function getPost() {
        const { data } = await axios(`${API}/api/v1/post?page=1&count=7`);
        setBlogCards(data);
    }
    useEffect(() => { getPost(); }, []);
    console.log(blogCards);
    const { control } = useForm();
    return (
        <div>
            <div className={styles.blogList}>
                <ToolHeader />
                <div className={styles.blogSearch}>
                    <Input
                        placeholder="Поиск по постам"
                        name="searchvalue"
                        control={control}
                    />
                </div>
                {
                    blogCards.map(
                        card => (
                            <BlogCard title={card.title} body={card.preview} />
                        ),
                    )
                }
                <div className={styles.blogDownload}>
                    <Button text="Загрузить еще" type="button" />
                </div>
            </div>
        </div>
    );
};

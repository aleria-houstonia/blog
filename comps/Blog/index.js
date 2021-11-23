import React from 'react';
import { BlogCard } from 'Components/BlogCard';
import { Button } from 'Components/Button';
import { Input } from 'Components/Input';
import { MainContainer } from 'Components/MainContainer';
import { ToolHeader } from 'Components/ToolHeader';
import styles from 'styles/Blog.module.css';
import axios from 'axios';

export const Blog = () => {
    return (
        <MainContainer>
            <div className={styles.blogList}>
                <ToolHeader />
                <div className={styles.blogSearch}>
                    <Input placeholder="Поиск по постам" name="searchvalue" />
                </div>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <div className={styles.blogDownload}>
                    <Button text="Загрузить еще" type="button" />
                </div>
            </div>
        </MainContainer>
    );
};

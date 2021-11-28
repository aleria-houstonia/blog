import React from 'react';
import { useForm } from 'react-hook-form';

import { BlogCard } from 'Components/BlogCard';
import { Button } from 'Components/Button';
import { Input } from 'Components/Input';
import { ToolHeader } from 'Components/ToolHeader';
import styles from 'styles/Blog.module.css';

export const Blog = () => {
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
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <div className={styles.blogDownload}>
                    <Button text="Загрузить еще" type="button" />
                </div>
            </div>
        </div>
    );
};

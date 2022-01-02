import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import { Button } from 'Components/Button';
import { MyInp } from 'Components/Inp';
import { MainContainer } from 'Components/MainContainer';
import { ToolBlogList } from 'Components/ToolBlogList';
import { postBlog } from 'lib';

const TextEditor = dynamic(() => import('../comps/Editor/index'), {
    ssr: false,
});

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [preview, setPreview] = useState('');

    const createPost = () => {
        const newPost = {
            title,
            body,
            preview,
            image: JSON.stringify(null),
        };
        postBlog(JSON.stringify(newPost));
    };
    return (
        <MainContainer>
            <div style={{ marginBottom: '26px' }}>
                <ToolBlogList />
            </div>
            <MyInp
                placeholder="title"
                name="title"
                handleEvent={(e) => setTitle(e.target.value)}
            />
            <TextEditor val="body" handleDesc={(e) => setBody(e)} />
            <TextEditor val="preview" handleDesc={(e) => setPreview(e)} />
            <div style={{ margin: '20px 0' }}>
                <Button
                    text="Опубликовать"
                    type="button"
                    handleEvent={createPost}
                />
            </div>
        </MainContainer>
    );
};

export default AddPost;

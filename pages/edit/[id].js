import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { deletePost, editBlog } from 'lib';
import { Button } from 'Components/Button';
import { ToolHeader } from 'Components/ToolHeader';
import { MainContainer } from 'Components/MainContainer';
import API from 'lib/api';

const TextEditor = dynamic(() => import('../../comps/Editor/index'), {
    ssr: false,
});

export default function () {
    const { query } = useRouter();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [preview, setPreview] = useState('');
    const [editedBlog, setEditedBlog] = useState([]);
    async function getDetails(id) {
        const { data } = await axios(`${API}/api/v1/post/${id}`);
        setBody(data.body);
        setTitle(data.title);
        setPreview(data.preview);
    }

    useEffect(() => {
        getDetails(query.id);
    }, [query.id]);
    const router = useRouter();
    function getEdits() {
        const newBlog = {
            ...editedBlog,
            preview,
            title,
            body,
            image: JSON.stringify(null),
        };
        setEditedBlog(newBlog);
    }
    return (
        <MainContainer>
            <ToolHeader />
            <TextEditor
                val={title}
                handleDesc={(e) => {
                    getEdits();
                    setTitle(e);
                }}
            />
            <TextEditor
                val={preview}
                handleDesc={(e) => {
                    getEdits();
                    setPreview(e);
                }}
            />
            <TextEditor
                val={body}
                handleDesc={(e) => {
                    getEdits();
                    setBody(e);
                }}
            />
            <Button
                text="редактировать"
                type="button"
                handleEvent={() => {
                    editBlog(query.id, JSON.stringify(editedBlog));
                }}
            />
            <Button
                text="Удалить"
                type="button"
                handleEvent={() => {
                    deletePost(query.id);
                    router.push('/');
                }}
            />
        </MainContainer>
    );
}

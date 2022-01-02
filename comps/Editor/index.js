import React, { useEffect, useState } from 'react';
import { draftToMarkdown } from 'markdown-draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {
    EditorState,
    convertToRaw,
    ContentState,
    convertFromHTML,
} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const styles = {
    editor: {
        border: '1px solid white',
        minHeight: '395px',
        maxWidth: '343px',
        minWidth: '320px',
        padding: '7px',
    },
};

export default function TextEditor({ val, handleDesc }) {
    const text = val;
    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(
            ContentState.createFromBlockArray(convertFromHTML(`${text}`))
        )
    );

    useEffect(() => {
        setEditorState(
            EditorState.createWithContent(
                ContentState.createFromBlockArray(convertFromHTML(`${text}`))
            )
        );
    }, [text]);

    const rawObject = convertToRaw(editorState.getCurrentContent());
    const markdown = draftToMarkdown(rawObject);
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        handleDesc(markdown);
    };
    return (
        <div style={styles.editor}>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    );
}

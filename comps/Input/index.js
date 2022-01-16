import React from 'react';
import { useController } from 'react-hook-form';

import styles from 'styles/Comps/Input.module.css';

export const Input = ({ placeholder, name, control }) => {
    const {
        field: { onChange, onBlur, value, ref },
    } = useController({
        name,
        control,
        rules: { required: true },
        defaultValue: '',
    });
    return (
        <input
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            inputRef={ref}
            type="text"
            className={styles.inputElem}
            placeholder={placeholder}
            name={name}
        />
    );
};

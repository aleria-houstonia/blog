import React from 'react';
import { useController } from 'react-hook-form';

import styles from 'styles/Input.module.css';

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
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched/blur
            value={value} // input value
            inputRef={ref}
            type="text"
            className={styles.inputElem}
            placeholder={placeholder}
            name={name}
        />
    );
};

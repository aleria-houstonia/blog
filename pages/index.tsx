import type { NextPage } from 'next';
import React from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import fp from 'lodash/fp';

import { ExampleComponent } from 'Components/ExampleComponent';

import styles from '../styles/Home.module.scss';


const Home: NextPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(fp.get(data));

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')} />
            <button type='submit'>
                button
            </button>
            <br />
            <ExampleComponent />
            <br />
            {moment().format('dddd, MMMM Do YYYY, hh:mm:ss')}
        </form>
    );
};

export default Home;

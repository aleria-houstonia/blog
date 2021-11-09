import type { NextPage } from 'next';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import fp from 'lodash/fp';

import { someFunc } from 'Lib/index';
import { ExampleComponent } from 'Components/ExampleComponent';
import styles from 'styles/Home.module.scss';


const Home: NextPage = () => {
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data: any) => console.log(fp.get('firstName', data), someFunc());

    const [time] = useState(moment().minute(0).second(0).format('dddd, MMMM Do YYYY, hh:mm:ss'));

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')} />
            <button type='submit'>
                button
            </button>
            <br />
            <ExampleComponent />
            <br />
            {time}
        </form>
    );
};

export default Home;

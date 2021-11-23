import React from 'react';
import type { NextPage } from 'next';
import { Blog } from 'Components/Blog/index';
import { MainContainer } from 'Components/MainContainer/index';

const Home: NextPage = () => {
    return (
        <div>
            <MainContainer>
                <Blog />
            </MainContainer>
        </div>
    );
};

export default Home;

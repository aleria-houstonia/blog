import React from 'react';
import type { NextPage } from 'next';

import { Blog } from 'Components/Blog';
import { MainContainer } from 'Components/MainContainer';

const Home: NextPage = () => (
    <div>
        <MainContainer>
            <Blog />
        </MainContainer>
    </div>
);

export default Home;

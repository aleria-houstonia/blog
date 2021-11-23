import React from "react";
import type { NextPage } from "next";
import Blog from "../comps/Blog";
import MainContainer from "../comps/MainContainer";

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

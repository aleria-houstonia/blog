import React from "react";
import type { NextPage } from "next";
// import { useForm } from "react-hook-form";
// import moment from "moment";
// import fp from "lodash/fp";
// import { someFunc } from "Lib/index";
// import styles from "styles/Home.module.scss";
import BlogDescription from "../comps/BlogDesciption";
import MainContainer from "../comps/MainContainer";

const Home: NextPage = () => {
    // const { register, handleSubmit } = useForm();
    // const onSubmit = (data: any) =>
    //     console.log(fp.get("firstName", data), someFunc());

    // const [time] = useState(
    //     moment().minute(0).second(0).format("dddd, MMMM Do YYYY, hh:mm:ss")
    // );

    return (
        <div>
            <MainContainer>
                <BlogDescription />
            </MainContainer>
        </div>
    );
};

export default Home;

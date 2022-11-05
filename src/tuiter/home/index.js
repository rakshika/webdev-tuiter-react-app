import React from "react";
import PostList from "../post-list";
import TuitsList from "../tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            {/*<PostList/>*/}
            <TuitsList/>
        </>
    );
};
export default HomeComponent;
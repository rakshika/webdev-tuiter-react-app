// import {Link} from "react-router-dom";
// import Nav from "../nav";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
// import NavigationSidebar from "./navigation-sidebar";
// import WhoToFollowList from "./who-to-follow-list";
// import PostSummaryList from "./post-summary-list";
//
// function Tuiter() {
//     return(
//         <div>
//             {/*<Link to="/">Lab</Link> |*/}
//             {/*<Link to="/hello">Hello</Link> |*/}
//             {/*<Link to="/tuiter">Tuiter</Link>*/}
//             <Nav/>
//             <NavigationSidebar active={"home"}/>
//             <WhoToFollowList/>
//             <PostSummaryList/>
//             <h1>Tuiter</h1>
//         </div>
//     );
// }
// export default Tuiter;

import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";
import {Routes, Route} from "react-router";



function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
                {/*<ExploreComponent/>*/}
                {/*<HomeComponent/>*/}
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}

export default Tuiter
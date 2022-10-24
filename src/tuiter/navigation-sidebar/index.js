import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (
    // {
    //     active = 'explore'
    // }
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item"><i className="bi bi-twitter"></i></a>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}><i className="bi bi-house-fill"></i> <span className="d-none d-xl-inline-block"> Home</span></Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}><i className="bi bi-hash"></i> <span className="d-none d-xl-inline-block"> Explore</span></Link>
            <Link to="#" className={`list-group-item ${active === 'notifications'?'active':''}`}><i className="bi bi-bell-fill"></i> <span className="d-none d-xl-inline-block"> Notifications</span></Link>
            <Link to="#" className={`list-group-item ${active === 'messages'?'active':''}`}><i className="bi bi-envelope-fill"></i> <span className="d-none d-xl-inline-block"> Messages</span></Link>
            <Link to="#" className={`list-group-item ${active === 'bookmarks'?'active':''}`}><i className="bi bi-bookmark-fill"></i> <span className="d-none d-xl-inline-block"> Bookmarks</span></Link>
            <Link to="#" className={`list-group-item ${active === 'lists'?'active':''}`}><i className="bi bi-list-ul"></i> <span className="d-none d-xl-inline-block"> Lists</span></Link>
            <Link to="#" className={`list-group-item ${active === 'profile'?'active':''}`}><i className="bi bi-person-fill"></i> <span className="d-none d-xl-inline-block"> Profile</span></Link>
            <Link to="#" className={`list-group-item ${active === 'more'?'active':''}`}><i className="bi bi-plus-circle-fill"></i> <span className="d-none d-xl-inline-block"> More</span></Link>
        </div>
    );
};
export default NavigationSidebar;
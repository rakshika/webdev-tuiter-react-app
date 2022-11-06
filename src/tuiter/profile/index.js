import React from "react";
// import profile from "../data/profile.json";
import{useSelector} from "react-redux";
import "./index.css"

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    return(
        <>
            <div className="row">
                <div className="col-1 align-self-center"><i className="bi bi-arrow-left float-end"></i></div>

                <div className="col-11">
                    <div className="h5 mb-0">{profile.firstName + " " + profile.lastName}</div>
                    <div className="small text-muted">{profile.tuits}</div>
                </div>
            </div>
            <img className="w-100 mt-1" src={`/images/${profile.bannerPicture}`} alt="landing background"/>
            <div className="row">
                <div className="col-8"><img className="wd-img-overlap w-25 rounded-pill" src={`/images/${profile.profilePicture}`} alt="profile"/></div>
                <div className="col-4"><button className="mt-2 btn rounded-pill float-end border-secondary border-thin fw-bold me-3">Edit profile</button></div>
            </div>
            <div className="h5 fw-bold mb-0">
                {profile.firstName + " " + profile.lastName}
            </div>
            <div className="text-muted">
                {profile.handle}
            </div><br/>
            <div>
                {profile.bio}
            </div>
            <div className="row d-inline-block text-muted p-1">
                <span><i className="bi bi-geo-alt"/> {profile.location}</span>
                <span><i className="bi bi-balloon"/> Born {profile.dateOfBirth}</span>
                <span><i className="bi bi-calendar3"/> Joined {profile.dateJoined}</span>
            </div><br/>
            <div className="row d-inline-block small">
                <span><b>{profile.followingCount}</b> Following</span>
                <span><b>{profile.followersCount}</b> Followers</span>
            </div><br/>
        </>
    );
};
export default ProfileComponent;
import React, {useState} from "react";
// import profile from "../data/profile.json";
import{useSelector, useDispatch} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import {useNavigate} from "react-router";

const EditProfile = () => {
    const profile = useSelector((state) => state.profile);
    // const [profile, setProfile] = useState(initialProfile)
    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [editDOB, setEditDOB] = useState(false);
    const [dateOfBirth, setDateofBirth] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();
    const updateProfileHandler = (event) => {
        dispatch(updateProfile({
                                   ...profile,
                                   name: name,
                                   bio: bio,
                                   location: location,
                                   website: website,
                                   dateOfBirth: dateOfBirth}));
        console.log(profile.name);
    }
    // const updateInfo = () => {
    //     const newProfile = {
    //         ...profile,
    //         name: name,
    //         bio: bio,
    //         location: location,
    //         website: website,
    //         dateOfBirth: dateOfBirth
    //     }
    //     setProfile(newProfile)
    // }

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        //updateInfo();
    }
    const handleBioChange = (e) => {
        const newBio = e.target.value;
        setBio(newBio);
        //updateInfo();
    }
    const handleLocationChange = (e) => {
        const newLoc = e.target.value;
        setLocation(newLoc);
        //updateInfo();
    }
    const handleWebsiteChange = (e) => {
        const newWebsite = e.target.value;
        setWebsite(newWebsite);
        //updateInfo();
    }
    const handleDOBEdit = () => {
        setEditDOB(!editDOB);
    }

    const handleDOBChange = (e) => {
        setDateofBirth(e.target.value);
    }

    let navigate = useNavigate();
    const saveProfile = () => {
        let path = `../profile`;
        navigate(path);
    }

    return(
        <>
            <div className="row">
                <div className="col-1 align-self-center"><i className="bi bi-x-lg float-end"
                    onClick={(event) => {saveProfile()}}></i></div>

                <div className="col-9">
                    <div className="h6 pt-1">Edit Profile</div>
                </div>
                <div className="col-2">
                    <div className="float-end"><button className="btn bg-black text-white small fw-bold rounded-pill me-3 pt-0 pb-1"
                       onClick={(event) => {updateProfileHandler(event); saveProfile()}}>Save</button></div>
                </div>

            </div>


            <div className="row position-relative d-inline ms-0">
                <img src={`/images/${profile.bannerPicture}`} className="w-100 px-0 mx-0 border-0" alt="landing background"/>
                <div className="col text-center card-img-overlay align-middle">
                    <div className="bg-danger w-100"></div>
                    <button className="rounded-circle bg-dark m-50 border-0 bg-opacity-75 mx-2"><i className="bi bi-camera text-white"></i></button>
                    <button className="rounded-circle bg-dark m-50 border-0 bg-opacity-75 mx-2"><i className="bi bi-x-lg text-white"></i></button>
                </div>
            </div>

            {/*<img className="w-100 mt-1" src={`/images/${profile.bannerPicture}`} alt="landing background"/>*/}
            
            <div className="row">
                <div className="col-8"><img className="wd-img-overlap w-25 rounded-pill"
                                            src={`/images/${profile.profilePicture}`} alt="profile"/></div>
            </div>

            <form className="form-floating">
                <input type="text" className="form-control" id="profile-name" value={name}
                       onChange={handleNameChange}/>
                <label htmlFor="profile-name">Name</label>
            </form><br/>
            <form className="form-floating">
                <input type="text" className="form-control" id="profile-bio" value={bio}
                       onChange={(event) => {handleBioChange(event)}}/>
                <label htmlFor="profile-bio">Bio</label>
            </form><br/>
            <form className="form-floating">
                <input type="text" className="form-control" id="profile-location" value={location}
                       onChange={(event) => {handleLocationChange(event)}}/>
                <label htmlFor="profile-location">Location</label>
            </form><br/>
            <form className="form-floating">
                <input type="text" className="form-control" id="profile-website" value={website}
                       onChange={(event) => {handleWebsiteChange(event)}}/>
                <label htmlFor="profile-website">Website</label>
            </form><br/>
            <div>

                {
                    !editDOB &&
                    <div>
                        <div className="text-muted small">Birth date &#183;
                            <button className="link-primary small border-0 text-decoration-none" onClick={handleDOBEdit}>Edit</button>
                        </div>
                        <div>{dateOfBirth}</div>
                    </div>
                }
                {
                    editDOB &&
                    <div className="small">
                        <div className="text-muted small">Birth date</div>
                        <input type="date" value={dateOfBirth} onChange={(event) => {handleDOBChange(event)}}/>
                        <button className="link-primary small border-0 text-decoration-none" onClick={handleDOBEdit}>Done</button>
                    </div>
                }

            </div>
            <br/>
            Switch to Professional <span className="bi bi-chevron-right float-end me-3"/><br/>
        </>
    );
};
export default EditProfile;
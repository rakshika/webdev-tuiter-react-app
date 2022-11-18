import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitsItem = (
    {
        tuit = {
            "_id": "123",
            "topic": "Space",
            "username": "SpaceX",
            "handle": "@spacex",
            "time": "2h",
            "image": "spacex.png",
            "title": "SpaceX's Mission",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a space faring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
            "liked": true,
            "likes": 2345,
            "replies": 123,
            "retuits": 432
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }
    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-sm-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <img width={45} src={`/images/${tuit.image}`} alt={`${tuit.userName}`} className="rounded-pill"/>
                </div>
                <div className="col-sm-10 col-md-11 col-lg-11 col-xl-11 col-xxl-11 ps-3">
                    <div className="row">
                        <div className="col-11 d-inline-block"><b>{tuit.username}</b>
                            <i className="bi bi-patch-check-fill ms-1 text-primary small"></i>
                            <span className="text-muted ms-1 small">{tuit.handle} &#x2022; {tuit.time}</span>
                        </div>
                        {/*<div className="col-1 d-inline-block text-muted">&#8943;</div>*/}
                        <div className="col-1 d-inline-block text-muted">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i></div>
                    </div>
                    <div className="small"><p>{tuit.tuit}</p></div>

                    <TuitStats key={tuit._id} tuit={tuit}/>

                </div>
            </div>
        </div>
    );
};
export default TuitsItem;
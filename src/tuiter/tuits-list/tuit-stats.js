import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
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
    let likedClass = tuit.liked?"bi bi-heart-fill text-danger":"bi bi-heart"
    return(
        <div className="row pt-1">
            <div className="col-3 small text-muted"><i
                className="bi bi-chat"></i><span> {tuit.replies}</span></div>
            <div className="col-3 small text-muted"><i
                className="bi bi-arrow-repeat"></i><span> {tuit.retuits}</span></div>

            <div className="col-3 small text-muted"><i onClick={() => dispatch(updateTuitThunk({
                                                                                                   ...tuit,
                                                                                                   likes: parseInt(tuit.likes)+1
                                                                                               }))}
                className={`bi ${tuit.liked === 'true' ? 'text-danger bi-heart-fill' : 'bi-heart'}`}></i>
                <span> {tuit.likes}</span></div>
            <div className="col-3 small text-muted"><i className="bi bi-upload"></i>
            </div>
        </div>
    )
}
export default TuitStats;
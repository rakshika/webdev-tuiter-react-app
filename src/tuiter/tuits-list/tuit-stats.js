import React from "react";

const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "spacex.jpg",
            "liked": "true",
            "replies": "123",
            "retuits": "432",
            "likes": "2345",
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars."
        }
    }
) => {
    return(
        <div className="row pt-1">
            <div className="col-3 small text-muted"><i
                className="bi bi-chat"></i><span> {tuit.replies}</span></div>
            <div className="col-3 small text-muted"><i
                className="bi bi-arrow-repeat"></i><span> {tuit.retuits}</span></div>
            <div className="col-3 small text-muted"><i
                className={`bi ${tuit.liked === 'true' ? 'text-danger bi-heart-fill' : 'bi-heart'}`}></i>
                <span> {tuit.likes}</span></div>
            <div className="col-3 small text-muted"><i className="bi bi-upload"></i>
            </div>
        </div>
    )
}
export default TuitStats;
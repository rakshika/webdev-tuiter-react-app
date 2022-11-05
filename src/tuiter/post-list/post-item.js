import React from "react";
const PostItem = (
    {
        post = {
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "dp": "rocket.jfif",
            "title": "Amazing show about <a href=\"#\">@Inspiration4x</a> mission!",
            "image": "astronaut.jfif",
            "imageHeading": "Coundown: Inspiration4 Mission to Space | Netflix Official Site",
            "text": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space ...<br>&#128279; netflix.com",
            "comment": "4.2K",
            "retweet": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    let text = (post.text !== "")?
               <div class="card-body list-group-item">
            <h4 class="card-title small"><b>{post.imageHeading}</b></h4>
            <p class="card-text text-muted small">{post.text}</p>
        </div>: "";
    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-sm-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <img width={45} src={`/images/${post.dp}`} alt={`${post.userName}`} className="rounded-pill"/>
                </div>
                <div className="col-sm-10 col-md-11 col-lg-11 col-xl-11 col-xxl-11 ps-3">
                    <div className="row">
                        <div className="col-11 d-inline-block"><b>{post.userName}</b>
                            <i className="bi bi-patch-check-fill ms-1 text-primary small"></i>
                            <span
                                className="text-muted ms-1 small">@{post.handle} - {post.time}</span>
                        </div>
                        <div className="col-1 d-inline-block text-muted">&#8943;</div>
                    </div>
                    <div className="small"><p>{post.title}</p></div>
                    <div className="card mt-2 list-group">
                        <img src={`/images/${post.image}`} alt={`${post.userName}`}
                             className="card-img-top list-group-item p-0"/>
                        {text}
                    </div>
                    <div className="row pt-1">
                        <div className="col-3 small text-muted"><i
                            className="bi bi-chat"></i><span> {post.comment}</span></div>
                        <div className="col-3 small text-muted"><i
                            className="bi bi-arrow-repeat"></i><span> {post.retweet}</span></div>
                        <div className="col-3 small text-muted"><i
                            className="bi bi-heart"></i><span> {post.likes}</span></div>
                        <div className="col-3 small text-muted"><i className="bi bi-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostItem;
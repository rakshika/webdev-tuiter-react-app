const PostItem = (post) => {
    let text = (post.text != "")?
       `<div class="card-body list-group-item bg-black">
            <h4 class="card-title small"><b>${post.imageHeading}</b></h4>
            <p class="card-text text-muted small">${post.text}</p>
        </div>`: "";

    return(`
        <div class="list-group-item bg-black">
            <div class="row">
                <div class="col-sm-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <img src=${post.dp} class="rounded-pill wd-img-dp-dimensions"/>
                </div>
                <div class="col-sm-10 col-md-11 col-lg-11 col-xl-11 col-xxl-11 ps-3">
                    <div class="row">
                        <div class="col-11 d-inline-block"><b>${post.userName}</b><i class="fa fa-check-circle ms-1"></i>
                        <span class="text-muted ms-1 small">@${post.handle} - ${post.time}</span></div>
                        <div class="col-1 d-inline-block text-muted">&#8943;</div>
                    </div>
                    <div class="small"><p>${post.title}</p></div>
                    <div class="card mt-2 bg-black list-group">
                    <img src=${post.image} class="card-img-top list-group-item bg-black p-0"/>
                        ${text}
                    </div>
                    <div class="row pt-1">
                        <div class="col-3 small text-muted"><i class="fa fa-comment"></i><span> ${post.comment}</span></div>
                        <div class="col-3 small text-muted"><i class="fa fa-retweet"></i><span> ${post.retweet}</span></div>
                        <div class="col-3 small text-muted"><i class="fa fa-heart"></i><span> ${post.likes}</span></div>
                        <div class="col-3 small text-muted"><i class="fa fa-share"></i></div>
                    </div>
                </div>
            </div>
        </div>   
    `);
}
export default PostItem;
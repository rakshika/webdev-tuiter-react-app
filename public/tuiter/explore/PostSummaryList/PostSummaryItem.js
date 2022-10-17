const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10 small">
                    <div class="text-muted">${post.topic}</div>
                    <div><b>${post.userName}</b><i class="fa fa-check-circle ms-1"></i><span class="text-muted ms-1">- ${post.time}</span></div>
                    <div><b>${post.title}</b>
                    </div>
                </div>
                <div class="col-2 align-self-center">
                    <div class="wd-img-icon-dimensions float-end"><img src=${post.image} class="img-fluid wd-image-round"></div>
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;
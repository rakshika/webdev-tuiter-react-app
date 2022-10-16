const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src=${who.avatarIcon} class = "rounded-pill  float-start wd-img-dp-dimensions"/>
                </div>
                <div class="col-7 small overflow-visible float-start">
                    <b>${who.userName}</b><i class="fa fa-check-circle ps-1"></i><br>@${who.handle}
                </div>
                <div class="col-3">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;
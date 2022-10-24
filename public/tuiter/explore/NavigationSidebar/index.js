const NavigationSidebar = (active) => {
    return(`
        <ul class="list-group">
            <li class="list-group-item"><i class="fab fa-twitter me-1"></i></li>
            <a href="../../../tuiter/explore/HomeScreen/index.html"><li class="list-group-item ${active
                                                                                                 == 'home'
                                                                                                 ? 'active'
                                                                                                 : ''}"><i class="fa fa-home me-1"></i><span
                class="d-none d-xl-inline-block">Home</span></li></a>
            <a href="../ExploreScreen/index.html"><li class="list-group-item ${active == 'explore'
                                                                               ? 'active' : ''}"><i class="bi
                       bi-gear-fill me-1"></i><span
                class="d-none d-xl-inline-block">Explore</span></li></a>
            <li class="list-group-item"><i class="fa fa-bell me-1"></i><span
                class="d-none d-xl-inline-block">Notifications</span></li>
            <li class="list-group-item"><i class="fa fa-envelope me-1"></i><span
                class="d-none d-xl-inline-block">Messages</span></li>
            <li class="list-group-item"><i class="fa fa-bookmark me-1"></i><span
                class="d-none d-xl-inline-block">Bookmarks</span></li>
            <li class="list-group-item"><i class="fa fa-list me-1"></i><span
                class="d-none d-xl-inline-block">Lists</span></li>
            <li class="list-group-item"><i class="fa fa-user me-1"></i><span
                class="d-none d-xl-inline-block">Profile</span></li>
            <li class="list-group-item"><i class="fa fa-chevron-circle-down me-1"></i><span
                class="d-none d-xl-inline-block">More</span></li>
        </ul>
        <button class="btn btn-primary rounded-pill w-100 mt-2">Tuit</button>
    `);
}
export default NavigationSidebar;
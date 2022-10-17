import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col mb-2">
                    <div class="form-group">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input type="text" class="form-control rounded-pill" placeholder="Search Tuiter">
                    </div>
                </div>
                <div class="col-1 align-self-center me-3">
                    <i class="fa fa-cog fa-2x text-primary"></i>
                </div>
            </div>

            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link ps-lg-2 pe-lg-2 ps-xl-3 pe-xl-3 active" href="../for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ps-lg-2 pe-lg-2 ps-xl-3 pe-xl-3" href="../trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ps-lg-2 pe-lg-2 ps-xl-3 pe-xl-3" href="../news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ps-lg-2 pe-lg-2 ps-xl-3 pe-xl-3" href="../sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-inline-block">
                    <a class="nav-link ps-lg-2 pe-lg-2 ps-xl-3 pe-xl-3" href="../entertainment.html" tabindex="-1">Entertainment</a>
                </li>
            </ul>

            <div class="card mt-2 mb-2">
                <img src="../../image/starship.jfif" class="w-100 card-img" alt="Image of spaceX">
                <div class="card-img-overlay d-flex align-items-end"><h3 class="text-white"><b>SpaceX's Starship</b></h3></div>
            </div>
            
            <div class="list-group mb-2">
                ${PostSummaryList()}
            </div>                        
    `);
}
export default ExploreComponent;

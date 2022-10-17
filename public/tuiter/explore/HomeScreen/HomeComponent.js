import PostList from "../PostList/index.js";

const HomeComponent = () => {
    return(`            
            <div class="list-group mb-2">
                ${PostList()}
            </div>                        
    `);
}
export default HomeComponent;
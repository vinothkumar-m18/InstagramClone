import Posts from "./Posts";
import Stories from "./Stories";

function Feed({postRefreshTrigger}){
    return (
        <>
            <div className = "stories">
                <Stories/>
            </div>
            <div className = "post-container">
                <Posts key = {postRefreshTrigger}/>
            </div>
        </>
    );
}
export default Feed;
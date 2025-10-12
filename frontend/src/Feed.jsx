import Posts from "./Posts";
import Stories from "./Stories";

function Feed(){
    return (
        <>
            <div className = "stories">
                <Stories/>
            </div>
            <div className = "post-container">
                <Posts/>
            </div>
        </>
    );
}
export default Feed;
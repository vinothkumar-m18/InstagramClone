import Posts from "./Posts";
import Stories from "./Stories";

function Feed(){
    return (
        <>
            <div className = "stories">
                <Stories/>
            </div>
            <div className = "posts">
                <Posts/>
            </div>
        </>
    );
}
export default Feed
import Sidebar from "./Sidebar";
import Feed from './Feed'
import Suggestions from './Suggestions'
function Home(){
    return (
        <div className = "home"> 
            <div className = "sidebar"><Sidebar/></div>
            <div className = "feed"><Feed/></div>
            <div className = "suggestions"><Suggestions/></div>
        </div>
    );
}
export default Home
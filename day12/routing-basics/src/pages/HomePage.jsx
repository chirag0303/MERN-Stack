import { Link } from "react-router";

const HomePage = () => {
    return (
        <div>
            <h1>This is Home Page</h1>
            
            <a href="/view">View Page</a><br/>
            <Link to='/view'>ViewPage_Link</Link>
        </div>
    );
};

export {HomePage};
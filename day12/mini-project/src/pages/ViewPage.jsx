import { Link } from "react-router";
const ViewPage = () => {
    return (
        <div>
            <h1>This is View Page</h1>
            <a href="/">Home Page</a><br/>
            <Link to='/'>Home_Link</Link>
        </div>
    );
};

export {ViewPage};
import { NavBar } from "../components/NavBar";
import {SearchBox} from "../components/SearchBox";
const HomePage = () => {
    return (
        <div>
            <NavBar />
            <h1>Vite HomePage </h1>
            <SearchBox />
        </div>
    );
};

export {HomePage};
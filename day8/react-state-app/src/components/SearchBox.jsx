// component is re-rendered only when the state is changed or props change
// we need to re-render to display the output of handleSearch

import { useState } from "react";


const SearchBox = () => {
    const { monitor, remote } = useState();
    // let searchText = "Hi";
    const handleSearch = (e) => {
        // console.log(e.target.value);
        remote(e.target.value);
    };
    return (
        <div>
            <input type="text" onKeyUp={handleSearch} />
            {/* <h3>{monitor}</h3> */}
            <h3>{monitor}</h3>
        </div>
    )
};

export { SearchBox };
import {debounce} from 'lodash';

function Search ({onSearch, clearSearch}) {

    // calls onSearch only after 300ms each time the user types
    const onChange = debounce(value => onSearch(value), 300);

    return <div className="Search">
        <label>Search Foods:</label> <input type="search" id="food-search" placeholder="Search foods" onChange={(e) => onChange(e.target.value)}/>
        <button onClick={() => clearSearch()}>Clear</button>
    </div>;
}

export default Search;
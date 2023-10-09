function Search ({onSearch}) {
    return <div className="Search">
        <label>Search Foods:</label> <input type="search" id="food-search" placeholder="Search foods" onChange={e => onSearch(e.target.value)}/>
        <button>Search</button>
    </div>;
}

export default Search;
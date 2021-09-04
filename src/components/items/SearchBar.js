import React from 'react'
function SearchBar() {
    return (
        <div>
            <div className="searchBar">

                <img src="./search.svg" alt="search icon" className="search-icon" />

                <input id="mainInput" placeholder="بحث" />
            </div>
        </div>
    )
}

export default SearchBar

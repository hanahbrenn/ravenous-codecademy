import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return ( 
        <div className="SearchBar">
            <input placeholder="Search Businesses" />
            <button>Let's Go</button>
        </div>  
    )
  }
}

export default SearchBar;

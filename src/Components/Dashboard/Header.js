import React from "react";
import { ReactComponent as SearchIcon } from "../../icons/search.svg"

function Header() {
  return (
    <header>
      <div className="search">
        <SearchIcon/>
        <input type="text" placeholder="Search" />
      </div>
    </header>
  )
}

export default Header;

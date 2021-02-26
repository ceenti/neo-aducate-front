import React from "react";
import { ReactComponent as SearchIcon } from "../../icons/search.svg"

function Header() {
  return (
    <header className="d-none d-md-block">
      <div className="search">
        <SearchIcon/>
        <input style={{textUnderlineOffset: 'unset'}} type="text" placeholder="Search" />
      </div>
    </header>
  )
}

export default Header;

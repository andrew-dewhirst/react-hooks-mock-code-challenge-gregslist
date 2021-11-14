import React from "react";
import Search from "./Search";

function Header({ onSearchSubmit }) {

  function handleItemSubmit(item) {
    onSearchSubmit(item)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleItemSubmit={handleItemSubmit}/>
    </header>
  );
}

export default Header;

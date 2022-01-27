import React from "react";

function Header({onHeaderClick, color}){

//console.log(isDarkMode)
return (
    <header>
      <h2>Shopster</h2>
        <button onClick={onHeaderClick}>
          {color ? "Dark" : "Light"} Mode
        </button>
    </header>
)
}

export default Header;
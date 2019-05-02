import React from "react";

function NavTabs(props) {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand"><strong>Memory Test!</strong></span>
  <span className="navbar-text">
      Your Score:{props.score}
  </span>
  
</nav>
  );
}

export default NavTabs;
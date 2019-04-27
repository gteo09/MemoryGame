import React from "react";

function NavTabs() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  Navbar
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        Home <span class="sr-only">(current)</span>
      </li>
      <li class="nav-item">
        Features
      </li>
      <li class="nav-item">
        Pricing
      </li>
      <li class="nav-item">
        Disabled
      </li>
    </ul>
  </div>
</nav>
  );
}

export default NavTabs;
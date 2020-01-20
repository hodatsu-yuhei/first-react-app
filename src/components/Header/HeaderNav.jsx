import React from "react";

const HeaderNavItem = props => (
  <li>
    <a href={`#${props.name}`}>{props.name}</a>
  </li>
);

const HeaderNav = () => (
  <nav>
    <ul>
      <HeaderNavItem name="introduction" />
      <HeaderNavItem name="application" />
      <HeaderNavItem name="menu" />
    </ul>
  </nav>
);

export default HeaderNav;

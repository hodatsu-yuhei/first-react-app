import React from "react";

import "./Header.css";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header = () => (
  <header>
    <HeaderLogo logoImage="./images/tempslie.png" />
    <HeaderNav />
  </header>
);

export default Header;

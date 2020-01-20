import React from "react";

import "./Footer.css";

const Footer = () => {
  const now = new Date();

  return (
    <footer>
      <p>{`&copy ${now.getFullYear()} Tempslie All Rights Reserved.`}</p>
    </footer>
  );
};

export default Footer;

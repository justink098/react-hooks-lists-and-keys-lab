import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linktag = links.map((link)=>(<a key={link} href={link}>{link}</a>))

  return <nav>{linktag}</nav>;
}

export default NavBar;

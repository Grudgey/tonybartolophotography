import React from "react";

const date = new Date();

function Footer() {
    return <footer className="footer"><p>Copyright Tony Bartolo Photography {date.getFullYear()}</p></footer>
}

export default Footer;
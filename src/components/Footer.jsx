import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">&#169; {date} Акишина Елизавета</p>
    </footer>
  )
}
export default Footer;
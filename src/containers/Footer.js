import React from "react";
import "../assets/styles/Footer.css";
import { useRef } from "react";

function Footer() {
  const ref = useRef(null);

  function scrollToTop() {
    window.scrollTo({top:0, left:0, behavior: 'smooth'})
  }

  return (
    <div className="footer">
      <div className="footer__backToTop" onClick={scrollToTop}>
        Back to top
      </div>
      <div className="footer__end">
        <p>This is Fake Amazon clone created for demonstration purposes</p>
        <p>© 2022, ArturPazyniuk.com</p>
      </div>
    </div>
  );
}

export default Footer;

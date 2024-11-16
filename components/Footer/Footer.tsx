import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import FooterCss from "./Footer.module.css";
const FooterPage = () => {
  return (
    <div>
      <footer className={FooterCss.footer}>
        <p className={FooterCss.footerPara}>
          Copyright © 2023 - 2024 | Structure Health & FitnessFooter.
        </p>

        <div className={FooterCss.iconsDiv}>
          <CiFacebook className={FooterCss.icons} />
          <CiInstagram className={FooterCss.icons} />
          <CiLinkedin className={FooterCss.icons} />
        </div>
   </footer>
    </div>
  );
};

export default FooterPage;

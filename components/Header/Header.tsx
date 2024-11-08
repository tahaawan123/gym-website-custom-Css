import React from "react";
import Link from "next/link";
import Image from "next/image";
import  HeaderCss  from  "./Header.module.css"  // Import the external CSS file

const HeaderPage = () => {
  return (
    <div>
      <header>
        <nav className={HeaderCss.headernav}>
          <Image
            src={"/logo.png"}
            alt={"Logo"}
            height={50}
            width={70}
            className={HeaderCss.logo}
          />
          <ul className={HeaderCss.navlinks}>
            <li className={HeaderCss.navitem}>
              <Link href="#" className={HeaderCss.navlink}>
                Home
              </Link>
            </li>
            <li className={HeaderCss.navitem}>
              <Link href="#" className={HeaderCss.navlink}>
                MemberShip
              </Link>
            </li>
            <li className={HeaderCss.navitem}>
              <Link href="#" className={HeaderCss.navlink}>
                Our Branches
              </Link>
            </li>
            <li className={HeaderCss.navitem}>
              <Link href="#" className={HeaderCss.navlink}>
                About Us
              </Link>
            </li>
            <li className={HeaderCss.navitem}>
              <Link href="#" className={HeaderCss.navlink}>
                Contact
              </Link>
            </li>
          </ul>
          <button className={HeaderCss.joinbutton}>
            Join Now
          </button>
        </nav>
      </header>
    </div>
  );
};

export default HeaderPage;

import Link from "next/link";
import React from "react";

import styles from "./mainHeader.module.css";

import Logo from "@/assets/logo.png";
import Image from "next/image";
import HeaderSvg from "./header-svg";

const MainHeader = () => {
  return (
    <>
      <HeaderSvg />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={Logo} alt="website logo" priority />
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>

            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;

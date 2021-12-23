import React from "react";
import logo from "../../assets/img/logo.png"
import styles from './Navbar.module.scss';
const Navbar: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}><img src={logo} width="250px" alt="" /></div>
                <input className={styles['menu-btn']} type="checkbox" id="menu-btn" />
                <label className={styles['menu-icon']}><span className={styles.navicon}></span></label>
                <ul className={styles.menu}>
                    <li><a href="/">शास्त्र</a></li>
                    <li><a href="/">कल्प</a></li>
                    <li><a href="/">वंशानुचरित्र</a></li>
                    <li><a href="/">भूगोल</a></li>
                    <li><a href="/">कैलेण्डर</a></li>
                    <li><a href="/">परिचय</a></li>
                    <li><a href="/">विषय</a></li>
                    <li><a href="/">रिसर्च</a></li>
                </ul>
            </header>
        </>
    )
}

export default Navbar;
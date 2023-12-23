import { NavLink } from "react-router-dom";
import styles from "./AnyaHeader.module.css"

const AnyaHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.utopiaTop}>
                <img src="/images/anya/freddyLogo.png" alt="" />
                <img src="/images/anya/freddyLogo.png" alt="" />
                <img src="/images/anya/freddyLogo.png" alt="" />
                <img src="/images/anya/freddyLogo.png" alt="" />
                <img src="/images/anya/freddyLogo.png" alt="" />
                <img src="/images/anya/freddyLogo.png" alt="" />
                <img src="/images/anya/freddyLogo.png" alt="" />
            </div>
            <div className={styles.utopiaDown}>
                <img src="/images/anya/freddyLogo.png" alt="" />
                <img src="/images/anya/freddyLogo.png" alt="" />
                <img src="/images/anya/freddyLogo.png" alt="" />
                <img src="/images/anya/freddyLogo.png" alt="" />
                <img src="/images/anya/freddyLogo.png" alt="" />
                <img src="/images/anya/freddyLogo.png" alt="" />
            </div>
            <div className={styles.navigation_bar}>
                <div className={styles.navigation_box}>
                    <NavLink to="/" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#000' : '#000',
                    })}>
                        Home
                    </NavLink>
                    <NavLink to="/анька" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#ff9900' : '#fff',
                    })}>
                        Анька
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default AnyaHeader;
import styles from "./HeaderSer.module.css"
import { NavLink } from "react-router-dom";


const HeaderSer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.utopiaTop}>
                <img src="/images/sergift/21.png" alt="" />
                <img src="/images/sergift/21.png" alt="" />
                <img src="/images/sergift/21.png" alt="" />
                <img src="/images/sergift/21.png" alt="" />
                <img src="/images/sergift/21.png" alt="" />
                <img src="/images/sergift/21.png" alt="" />
            </div>
            <div className={styles.utopiaDown}>
                <img src="/images/sergift/21.png" alt="" />
                <img src="/images/sergift/21.png" alt="" />
                <img src="/images/sergift/21.png" alt="" />
                <img src="/images/sergift/21.png" alt="" />
                <img src="/images/sergift/21.png" alt="" />
            </div>
            <div className={styles.navigation_bar}>
                <div className={styles.navigation_box}>
                    <NavLink to="/" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#fff',
                    })}>
                        Home
                    </NavLink>
                    <NavLink to="/сережа" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#bb86fc' : '#fff',
                    })}>
                        Сережа
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default HeaderSer;
import { NavLink } from "react-router-dom";
import styles from "./HeaderTeska.module.css"

const HeaderTeska = () => {
    return (
        <div className={styles.container}>
            <div className={styles.utopiaTop}>
                <img src="/images/teska/utopia.png" alt="" />
                <img src="/images/teska/utopia.png" alt="" />
                <img src="/images/teska/utopia.png" alt="" />
                <img src="/images/teska/utopia.png" alt="" />
                <img src="/images/teska/utopia.png" alt="" />
                <img src="/images/teska/utopia.png" alt="" />
                <img src="/images/teska/utopia.png" alt="" />
            </div>
            <div className={styles.utopiaDown}>
                <img src="/images/teska/utopia.png" alt="" />
                <img src="/images/teska/utopia.png" alt="" />
                <img src="/images/teska/utopia.png" alt="" />
                <img src="/images/teska/utopia.png" alt="" />
                <img src="/images/teska/utopia.png" alt="" />
                <img src="/images/teska/utopia.png" alt="" />
            </div>
            <div className={styles.navigation_bar}>
                <div className={styles.navigation_box}>
                    <NavLink to="/" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#fff',
                    })}>
                        Home
                    </NavLink>
                    <NavLink to="/патёсак" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#fc8686' : '#fff',
                    })}>
                        Патёсак
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default HeaderTeska;
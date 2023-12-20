import styles from "./Header.module.css"
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navigation_bar}>
                <div className={styles.navigation_box}>
                    <NavLink to="/" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#FFD700' : '#fff',
                    })}>
                        Home
                    </NavLink>
                    <NavLink to="/сережа" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#FFD700' : '#fff',
                    })}>
                        Сережа
                    </NavLink>
                    <NavLink to="/патёсак" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#FFD700' : '#fff',
                    })}>
                        Патёсак
                    </NavLink>
                    <NavLink to="/анька" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#FFD700' : '#fff',
                    })}>
                        Анька
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;
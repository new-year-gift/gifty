import styles from "./HeaderSer.module.css"
import { NavLink } from "react-router-dom";


const HeaderSer = () => {
    return (
        <div className={styles.container}>
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
                    <NavLink to="/патёсак" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#fff',
                    })}>
                        Патёсак
                    </NavLink>
                    <NavLink to="/анька" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#fff',
                    })}>
                        Анька
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default HeaderSer;
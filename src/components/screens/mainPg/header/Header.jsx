import styles from "./Header.module.css"
import { NavLink } from "react-router-dom";
import { useCode } from "../../../hooks/useCode";


const Header = () => {

    const { code } = useCode()

    return (
        <div className={styles.container}>
            <div className={styles.navigation_bar}>
                <div className={styles.navigation_box}>
                    <NavLink to="/" className={styles.nav} style={({ isActive }) => ({
                        color: isActive ? '#FFD700' : '#fff',
                    })}>
                        Home
                    </NavLink>
                    {
                        code.code == "serezhaRapik9911" ?
                            <NavLink to="/сережа" className={styles.nav} style={({ isActive }) => ({
                                color: isActive ? '#FFD700' : '#fff',
                            })}>
                                Сережа
                            </NavLink>
                            :
                            <></>
                    }
                    {
                        code.code == "teskaRapik2007" ?
                            <NavLink to="/патёсак" className={styles.nav} style={({ isActive }) => ({
                                color: isActive ? '#FFD700' : '#fff',
                            })}>
                                Патёсак
                            </NavLink>
                            :
                            <></>
                    }
                    {
                        code.code == "anyaRapik24" ?
                            <NavLink to="/анька" className={styles.nav} style={({ isActive }) => ({
                                color: isActive ? '#FFD700' : '#fff',
                            })}>
                                Анька
                            </NavLink>
                            :
                            <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
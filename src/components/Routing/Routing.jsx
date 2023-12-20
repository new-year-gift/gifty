import { Routes, Route, HashRouter } from "react-router-dom";
import MainPg from "../screens/mainPg/MainPg";
import Serezha from "../screens/SerezhaPg/Serezha";
import Teska from "../screens/TeskaPg/Teska";
import Anya from "../screens/AnyaPg/Anya";

const Routing = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="" element={<MainPg />} />
                <Route path="/сережа" element={<Serezha />} />
                <Route path="/патёсак" element={<Teska />} />
                <Route path="/анька" element={<Anya />} />
            </Routes>
        </HashRouter>
    );
}

export default Routing;
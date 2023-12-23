import { useContext } from "react";
import TeksaBody from "./TeskaBody/TeksaBody";
import TeskaEnd from "./TeskaEnd/TeskaEnd";
import TeskaHero from "./TeskaHero/TeskaHero";
import HeaderTeska from "./header_teska/HeaderTeska";
import { CodeContext } from "../../Provider/CodeProvider";
import { Navigate } from "react-router-dom";

const Teska = () => {

    const {user} = useContext(CodeContext)

    if (user == false) return <Navigate to='/none-auth'/>
    return (
        <>
            <HeaderTeska />
            <TeskaHero />
            <TeksaBody />
            <TeskaEnd />
        </>
    );
}

export default Teska;
import { useContext } from "react";
import AnyaBody from "./AnyaBody/AnyaBody";
import AnyaEnd from "./AnyaEnd/AnyaEnd";
import AnyaHeader from "./AnyaHeader/AnyaHeader";
import AnyaHero from "./AnyaHero/AnyaHero";
import { CodeContext } from "../../Provider/CodeProvider";
import { Navigate } from "react-router-dom";

const Anya = () => {

    const {user} = useContext(CodeContext)

    if (user == false) return <Navigate to='/none-auth'/>
    return (
        <>
            <AnyaHeader />
            <AnyaHero />
            <AnyaBody />
            <AnyaEnd />
        </>
    );
}

export default Anya;
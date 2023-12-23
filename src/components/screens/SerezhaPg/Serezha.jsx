import { useContext } from "react";
import SerezhaBody2021 from "./SerezhaBody2021/SerezhaBody2021";
import SerezhaBody2022 from "./SerezhaBody2022/SerezhaBody2022";
import SerezhaBody2023 from "./SerezhaBody2023/SerezhaBody2023";
import SerezhaEnd from "./SerezhaEnd/SerezhaEnd";
import SerezhaHero from "./SerezhaHero/SerezhaHero";
import HeaderSer from "./header_ser/HeaderSer";
import { CodeContext } from "../../Provider/CodeProvider";
import { Navigate } from "react-router-dom";

const Serezha = () => {

    const {user} = useContext(CodeContext)

    if (user == false) return <Navigate to='/none-auth'/>
    return (
        <>
            <HeaderSer />
            <SerezhaHero />
            <SerezhaBody2023 />
            <SerezhaBody2022 />
            <SerezhaBody2021 />
            <SerezhaEnd />
        </>
    );
}

export default Serezha;
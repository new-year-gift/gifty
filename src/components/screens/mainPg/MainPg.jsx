import { useContext } from "react";
import Header from "./header/Header";
import Welcome from "./welcome/Welcome";
import { CodeContext } from "../../Provider/CodeProvider";
import { Navigate } from "react-router-dom";

const MainPg = () => {

    const {user} = useContext(CodeContext)

    if (user == false) return <Navigate to='/none-auth'/>

    return (
        <>
            <Header />
            <Welcome />
            
        </>
    );
}

export default MainPg;
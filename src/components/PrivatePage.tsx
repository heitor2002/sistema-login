import { useContext } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";

const PrivatePage = () => {
    const auth = useContext(AuthContext)
    return (
        <>
        <div className="container">
            <div style={{color: "white"}}>
            <h2>Parabéns {auth.user?.username}, logado com sucesso!</h2>
            <h2>Username: {auth.user?.username}</h2>
            <h2>E-mail: {auth.user?.email}</h2>
            <h2>Token: {auth.user?.token}</h2>
            </div>
        </div>
        </>
    )
}

export default PrivatePage;
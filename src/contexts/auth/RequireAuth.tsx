import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import LoginPage from "./LoginPage";

const RequireAuth = ({children}:{children:JSX.Element}) => {
    const auth = useContext(AuthContext);
    if(!auth.user){
        return <LoginPage /> 

    }
    return children;
}

export default RequireAuth;
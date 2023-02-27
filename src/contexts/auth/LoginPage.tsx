import { FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const LoginPage = () => {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        if(email && password){
            const isLogged = await auth.signin(email, password)
            if(isLogged){
                navigate("/")
            }else{
                alert("Acesso negado!")
            }
        }
    }
    return (
        <>
        <div className="container">
            <div className="box-login">
                <h2>Página de login</h2>
                <form id="form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label>E-mail:</label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Password:</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <h2>Não possuo uma conta. <Link to={"/register-page"}>Cadastrar!</Link></h2>
                    <div className="field">
                        <input type="submit" value={"Entrar"} />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginPage;
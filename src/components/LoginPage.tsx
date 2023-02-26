import { FormEvent, useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        console.log(email, password)
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
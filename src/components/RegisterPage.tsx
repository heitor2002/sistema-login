import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const token = Math.random().toString(34).substring(2)
    const user = {email, password, token}
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    }).then(() => {
        navigate("/")
    })
  };
  return (
    <>
      <div className="container">
        <div className="box-login">
          <h2>Página de login</h2>
          <form id="form" onSubmit={handleSubmit}>
          <div className="field">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="field">
              <label>E-mail:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Confirmar e-mail:</label>
              <input
                type="text"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <h2>Já possuo uma contar. <Link to={"/login-page"}>Entrar!</Link></h2>
            <h2><Link to={"/"}>Voltar para página inicial!</Link></h2>
            <div className="field">
              <input type="submit" value={"Cadastrar"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

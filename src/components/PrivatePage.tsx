import { useContext } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";
import { Link } from "react-router-dom";

const PrivatePage = () => {
  const auth = useContext(AuthContext);
  const handleLogout = async () => {
    await auth.signout()
    window.location.reload()
  }
  return (
    <>
      <div className="container">
        <div className="private-page">
          <center>
            <h2>Parabéns {auth.user?.username}, login realizado com sucesso!</h2>
          </center>
          <h3>Username: {auth.user?.username}</h3>
          <h3>E-mail: {auth.user?.email}</h3>
          <h3>Token: {auth.user?.token}</h3>
          <Link to="/"><button>Home</button></Link>
          <button onClick={handleLogout}>Sair</button>
        </div>
      </div>
    </>
  );
};

export default PrivatePage;

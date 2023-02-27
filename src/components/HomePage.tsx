import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <Link to={"/register-page"}>
              <li>Cadastrar</li>
            </Link>
            <Link to={"/login-page"}>
              <li>Entrar</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HomePage;

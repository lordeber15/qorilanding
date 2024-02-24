import style from "./navbar.module.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <div className={style.contenedor}>
      <Link to={"/"}>
        <div className={style.logo}>
          <img src={logo} height={"100px"} />
        </div>
      </Link>
      <div className={style.titles}>
        <Link to="/">
          <div className={style.links}>INICIO</div>
        </Link>
        <Link to="/nosotros">
          <div className={style.links}>NOSOTROS</div>
        </Link>
        <Link to="/producto">
          <div className={style.links}>PRODUCTO</div>
        </Link>
        <Link to="/contactanos">
          <div className={style.links}>CONTACTANOS</div>
        </Link>
      </div>
    </div>
  );
}

export default navbar;

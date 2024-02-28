import style from "./inicio.module.css";
import fideos from "../../assets/fideos.png";
import ceo from "../../assets/ceo.jpg";
import { Link } from "react-router-dom";
function inicio() {
  return (
    <div className={style.contenedor}>
      <div className={style.imagen}>
        <div>
          <img src={fideos} className={style.fideos} />
        </div>
      </div>
      <div className={style.botoncompra}>
        <Link className={style.boton}>¡Compra Ahora!</Link>
      </div>
      <div className={style.ceo}>
        <img className={style.imagenceo} src={ceo} />
        <span className={style.textceo}>
          <h1 className={style.titleceo}>
            <span>CEO-</span>
            <span className={style.fundador}> FUNDADOR</span>
          </h1>
          <p>
            Anibal Prado Condori, nacido en Andahuaylas Peru , el año 1986, de
            profesión Ing. Agroindustrial, de la Universidad Nacional San
            Cristobal de Huamanga.
          </p>
          <p>
            Este proyecto nace a causa de un problema que tuvo su esposa cuando
            estuvo en un estado de gestación, una mala alimentación le causo
            ANEMIA SEVERA 9.2, Anibal Prado Condori preocupado por el estado de
            su esposa, decide hacer algo, en un almuerzo familiar nace esta idea
            de crear una formula de unas pastas hechas a base de QUINUA, CUY y
            ATACCO, el cual fue inicio de esta oportunidad ante un problema.
          </p>{" "}
          Emprendimiento el 12 de Octubre del 2019.
        </span>
      </div>
    </div>
  );
}

export default inicio;

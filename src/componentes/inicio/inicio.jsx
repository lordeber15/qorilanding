import style from "./inicio.module.css";
import fideos from "../../assets/fideos.png";
function inicio() {
  return (
    <div className={style.contenedor}>
      <div className={style.imagen}>
        <div>
          LA RIQUEZA DE <br /> NUESTRO ORIGEN
        </div>
        <div>
          <img src={fideos} className={style.fideos} />
        </div>
      </div>
    </div>
  );
}

export default inicio;

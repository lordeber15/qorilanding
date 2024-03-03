import style from "./cerfiticaciones.module.css";
import fda from "../../assets/fda.svg";
import iso from "../../assets/iso9001.svg";
import haccp from "../../assets/haccp.svg";
import free from "../../assets/freegluten.svg";
function certificaciones() {
  return (
    <div className={style.contenedor}>
      <div className={style.contenedortext}>
        <h1 className={style.title1}>LO QUE NOS DIFERENCIA</h1>
        <h1 className={style.title2}>
          Productos nutritivos, orgánicos y deliciosos.
        </h1>
        <p className={style.parrafo}>
          AGROINDUSTRIAS PRADO S A C tiene diversos reconocimientos y ha ganado
          premios a nivel nacional e internacional con nuestra marca QORI por
          medio de su CEO el ing Anibal Prado Condori por que contamos con
          productos libres de octógonos según la ley N 30021 “Ley de promoción
          de la alimentación saludable para niños, niñas y adolescentes, y su
          Reglamento aprobado por Decreto Supremo N 017 2017 SA” validación
          HACCP.
        </p>
      </div>
      <div className={style.certificados}>
        <img src={fda} />
        <img src={iso} />
        <img src={haccp} />
        <img src={free} />
      </div>
    </div>
  );
}

export default certificaciones;

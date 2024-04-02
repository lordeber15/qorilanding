import style from "./productos.module.css";
import CardDetalle from "../cardetalle/cardetalle";
function productos() {
  return (
    <div>
      <div className={style.pastasgeneral}>
        <div className={style.descripcionpasta}>
          <span className={style.titlepastas}>Pasta con Quinua Orgánica</span>
          <p className={style.ppasta}>
            Pasta a base harina de quinua orgánica y super alimentos,
            encuéntralas en presentaciones Fusilli.
          </p>
          <CardDetalle
            titulop1={"PASTA CON QUINUA"}
            titulop2={"ORGÁNICA"}
            lista={[
              { des: "Formatos Fusilli" },
              { des: "Presentación caja Box X 21 und De 250 g" },
            ]}
          />
        </div>
        <div className={style.pasta} />
      </div>
      <div className={style.pastasgeneral}>
        <div className={style.pastac} />
        <div className={style.descripcionpasta}>
          <span className={style.titlepastas}>
            Pasta con Quinua Orgánica de Colores
          </span>
          <p className={style.ppasta}>
            Pasta a base harina de quinua orgánica y super alimentos,
            encuéntralas en presentaciones Fusilli.
          </p>
          <CardDetalle
            titulop1={"PASTA DE QUINUA ORGÁNICA DE"}
            titulop2={"COLORES"}
            lista={[
              { des: "Presentación: Fusilli" },
              { des: "Gramaje: 250 gr" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default productos;

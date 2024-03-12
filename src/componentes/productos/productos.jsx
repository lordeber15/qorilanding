import style from "./productos.module.css";
import CardDetalle from "../cardetalle/cardetalle";
function productos() {
  return (
    <div>
      <div className={style.pastasgeneral}>
        <div className={style.descripcionpasta}>
          <span className={style.titlepastas}>Pasta de Quinua Orgánica</span>
          <p className={style.ppasta}>
            Pasta a base harina de quinua orgánica y super alimentos,
            encuéntralas en presentaciones Tagliatelle y Tornillo.
          </p>
          <CardDetalle
            titulop1={"PASTA DE QUINUA"}
            titulop2={"ORGÁNICA"}
            lista={[
              { des: "Formatos TORNILLO fuzilli" },
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
            Pasta de Quinua Orgánica de Colores
          </span>
          <p className={style.ppasta}>
            Pasta a base harina de quinua orgánica y super alimentos,
            encuéntralas en presentaciones Tagliatelle y Tornillo.
          </p>
          <CardDetalle
            titulop1={"PASTA DE QUINUA ORGÁNICA DE"}
            titulop2={"COLORES"}
            lista={[
              { des: "Presentación: Tagliatelle 8.3, Tornillo" },
              { des: "Gramaje: 250 gr" },
            ]}
          />
        </div>
      </div>
      <div className={style.pastasgeneral}>
        <div className={style.descripcionpasta}>
          <span className={style.titlepastas}>
            Pasta de Trigo Fortificado y Curcumina
          </span>
          <p className={style.ppasta}>
            Pasta a base harina de quinua orgánica y super alimentos,
            encuéntralas en presentaciones Tagliatelle y Tornillo.
          </p>
          <CardDetalle
            titulop1={"PASTA DE TRIGO FORTIFICADO Y "}
            titulop2={"CURCUMINA"}
            lista={[
              { des: "Formatos: tagliatelle 8.3, canuto." },
              {
                des: "Pasta hecha a base de harina de trigo fortificado y polvo de curcumina.",
              },
              { des: "Presentacion bolsa Box X 20 und De 250 g." },
            ]}
          />
        </div>
        <div className={style.pastacur} />
      </div>
    </div>
  );
}

export default productos;

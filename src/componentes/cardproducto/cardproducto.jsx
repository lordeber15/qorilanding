import style from "./cardproducto.module.css";
import CardDetalle from "../cardetalle/cardetalle";
function cardproducto() {
  return (
    <div>
      <div className={style.descripcionpasta}>
        <span className={style.titlepastas}>Pastas</span>
        <p className={style.ppasta}>
          Pasta a base harina de quinua orgánica y super alimentos, encuéntralas
          en presentaciones Tagliatelle y Tornillo.
        </p>
        <CardDetalle
          titulop1={"PASTA DE QUINUA"}
          titulop2={"ORGÁNICA"}
          lista={[
            { des: "Presentación: Tagliatelle 8.3, Tornillo" },
            { des: "Gramaje: 250 gr" },
          ]}
        />
        <CardDetalle
          titulop1={"PASTA MULTICEREAL DE"}
          titulop2={"SUPER ALIMENTOS"}
          lista={[
            { des: "Presentación: Tagliatelle 8.3, Tornillo" },
            { des: "Gramaje: 250 gr" },
          ]}
        />
      </div>
    </div>
  );
}

export default cardproducto;

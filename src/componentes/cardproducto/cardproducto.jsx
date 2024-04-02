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
          titulop1={"PASTA CON QUINUA"}
          titulop2={"ORGÁNICA"}
          lista={[{ des: "Presentación: Fusilli" }, { des: "Gramaje: 250 gr" }]}
        />
        <CardDetalle
          titulop1={"PASTA CON QUINUA ORGANICA DE COLORES"}
          titulop2={"(con mazorca de maiz morado, espirulina y curcuma)"}
          lista={[{ des: "Presentación: Fusilli" }, { des: "Gramaje: 250 gr" }]}
        />
      </div>
    </div>
  );
}

export default cardproducto;

import style from "./contactanos.module.css";
import whatsapp from "../../assets/whatsapp2.svg";
function contactanos() {
  return (
    <div className={style.contenedor}>
      <div className={style.contenedorinfo}>
        <h1 className={style.titlecontacto}>CONTÁCTANOS</h1>
        <span className={style.subtitlecontacto}>
          Búscanos estaremos felices de atenderte
        </span>
        <span className={style.telefono}>
          <img className={style.icowhatsapp} src={whatsapp} />
          +51 990779050
        </span>
      </div>
      <div className={style.info}>
        <span className={style.infod}>QORIFOOD</span>
        <span className={style.infod}>
          Dr.: Jr. 24 de Junio N 164 San Juan Bautista
        </span>
        <span className={style.infod}>CEL: +51 990779050</span>
        <span className={style.infod}>Lun a Vier: 8 AM - 6 PM</span>
      </div>
    </div>
  );
}

export default contactanos;

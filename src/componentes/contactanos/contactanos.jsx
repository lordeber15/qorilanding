import style from "./contactanos.module.css";
import whatsapp from "../../assets/whatsapp2.svg";
import Certificaciones from "../certificaciones/certificaciones";
function contactanos() {
  return (
    <div>
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
          <span className={style.infodt}>QORIFOOD</span>
          <span className={style.infodp}>
            Dr.: Jr. 24 de Junio N 164 San Juan Bautista
          </span>
          <span className={style.infod}>CEL: +51 990779050</span>
          <span className={style.infod}>Lun a Vier: 8 AM - 6 PM</span>
        </div>
      </div>
      <div className={style.fondocontacto}>
        <div className={style.descripcioncontacto}>
          <h1 className={style.titleform}>BÚSCANOS</h1>
          <p className={style.parrafoform}>
            <p>
              Búscanos estaremos felices de atenderte en Tiyapuy. Somos la mega
              brand de alimentos que revaloriza los cultivos andinos de papas
              nativas, quinua orgánica y pastas especiales. Búscanos! Estaremos
              felices de aclarar todas tus dudas. En Tiyapuy cada día trabajamos
              para desarrollar nuevos alimentos de origen peruano nutritivos,
              orgánicos y deliciosos para el mundo.
            </p>
            <p>
              Si tienes alguna duda, comentario o simplemente quieres
              saludarnos, no dudes en enviarnos un mensaje a través del
              formulario que encontrarás aquí a la derecha. Te aseguramos que te
              responderemos en cuanto podamos. En nuestro equipo estamos siempre
              dispuestos a ayudar.
            </p>
            Queremos que te sientas cómodo al comunicarte con nosotros, así que
            no dudes en contarnos cualquier cosa pronto.
          </p>
        </div>
        <div className={style.formulario}>
          <form className={style.formularioinput}>
            <h1 className={style.formtitle}>¿TIENES PREGUNTAS? ESCRIBENOS</h1>
            <input
              className={style.inputs}
              type="text"
              placeholder="Nombre Completo *"
              required
            />
            <input
              className={style.inputs}
              type="text"
              placeholder="Telefono *"
              required
            />
            <input
              className={style.inputs}
              type="text"
              placeholder="Email *"
              required
            />
            <textarea className={style.textarea} placeholder="Mensaje..." />
            <div>
              <input
                className={style.checkbox}
                type="checkbox"
                name="terminos"
              />
              <label form="terminos" className={style.textterminos}>
                Acepto
                <a className={style.terminosycondiciones}>
                  &nbsp;Términos y condiciones.
                </a>
              </label>
            </div>
            <button className={style.btnenviar}>Enviar Mensaje</button>
          </form>
        </div>
      </div>
      <div>
        <Certificaciones />
      </div>
    </div>
  );
}

export default contactanos;

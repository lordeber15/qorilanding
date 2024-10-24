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
            Originaria de Ayacucho, Qori es una marca peruana premium basda en el comercio justo . nuestra familia esta dedicada a su receta , garantizabdo que nuestros productos esten llenos de nutrientes provenientes de la quinua organica y superalimentos naturales , demostrando que todavia es posible comer rico y saludable . 
            </p>
            <p>Qori la riqueza de nuestro origen</p>
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
        <div className={style.formulario}  >
          <form className={style.formularioinput} action="https://formsubmit.co/1a00dd92f4de823d4840f4305d9d022e" method="POST">
            <h1 className={style.formtitle}>¿TIENES PREGUNTAS? ESCRIBENOS</h1>
            <input
              className={style.inputs}
              type="text"
              placeholder="Nombre Completo *"
              required
              name="nombre"
            />
            <input
              className={style.inputs}
              type="text"
              placeholder="Telefono *"
              required
              name="telefono"
            />
            <input
              className={style.inputs}
              type="text"
              placeholder="Email *"
              required
              name="email"
            />
            <textarea className={style.textarea} placeholder="Mensaje..." name="descripcion" />
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
            <button value="Enviar" className={style.btnenviar}>Enviar Mensaje</button>
            <input type="hidden" name="_next" value="http://www.qorifoodss.com/"/>
            <input type="hidden" name="_captcha" value="false"/>
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

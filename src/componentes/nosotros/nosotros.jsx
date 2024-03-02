import imghistoria from "../../assets/historia.jpg";
import style from "./nosotros.module.css";
import empacado from "../../assets/Empacado.png";
function nosotros() {
  return (
    <div className={style.contenergeneral}>
      <div className={style.contenedor}>
        <div className={style.parrafogeneral}>
          <h1 className={style.title}>
            NUESTRA<span className={style.subtitulo}>&nbsp;HISTORIA</span>
          </h1>
          <p className={style.parrafo}>
            AGROINDUSTRIAS PRADO S A C nace en tiempos de crisis y la adversidad
            nos hace regresar a nuestros orígenes en Ayacucho para recoger la
            herencia del hombre de Pikimachay quien hace miles de años domesticó
            al cuy y cultivó la quinua Nuestra empresa respeta la Pachamama,
            trabajamos por recuperar el agro, nuestra biodiversidad y el clima
            Queremos ofrecer a nuestros consumidores productos regados con agua
            de lluvia, 100 naturales y en cuyo proceso se cuidaron nuestros
            campos altoandinos”, así mismo nos preocupamos de una buena
            alimentación “Del campo a la mesa”, donde nuestros ingredientes de
            nuestros productos son procesados cuidadosamente, aplicando una
            tecnología europea, conservando el sabor natural de los alimentos,
            para obtener un producto de calidad e inocuidad
          </p>
        </div>
        <img className={style.imagen} src={imghistoria} />
      </div>
      <div className={style.nosotroscontenedor}>
        <div className={style.contenedortitle}>
          <h1 className={style.pastatitle}>
            PASTA DE QUINUA ORGANICA
            <span className={style.title2}>&nbsp;DE COLORES</span>
          </h1>
          <h3 className={style.subtitlepasta}>
            Línea de alimentos peruanos nutritivos y deliciosos
          </h3>
        </div>
        <div className={style.detallesproducto}>
          <div className={style.descripciones}>
            <div className={style.parrafopro}>
              <span className={style.numerop}>1</span>
              <p>
                Pasta hecha con harina de quinua orgánica ayacuchana 75% (con
                certificado orgánico de la quinua)
              </p>
            </div>

            <div className={style.parrafopro}>
              <span className={style.numerop}>2</span>
              <p>Pasta con HIERRO NO HEMINICO, 100% con insumos vegetales.</p>
            </div>
          </div>
          <div className={style.imagen}>
            <img src={empacado} className={style.imagentamaño} />
          </div>
          <div className={style.descripciones}>
            <div className={style.parrafopro}>
              <span className={style.numerop}>3</span>Formatos: TORNILLO
              (fuzilli).
            </div>
            <div className={style.parrafopro}>
              <span className={style.numerop}>4</span>
              <p>Presentación; caja Box X 21 und. De 250 g.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default nosotros;

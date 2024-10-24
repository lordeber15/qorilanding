import style from "./valores.module.css"
import calidad from "../../assets/calidad.jpg"
import honradez from "../../assets/honradez.jpg"
import humildad from "../../assets/humildad.jpg"
import trabajo from "../../assets/trabajo.jpg"
import puntualidad from "../../assets//puntualidad.jpg"

function valores() {
  return (
    <div className={style.contenedor}>
        <div className={style.titulo}>CALIDAD</div>
        <div className={style.parrafo}>
        <div className={style.text}>Ofrecer productos de alto valor nutricional, elaborados bajo estrictos estándares de calidad y salubridad en nuestras plantas de producción</div>
        <img src={calidad} className={style.imagenes} />
        </div>
        <div className={style.titulo}>HONRADEZ</div>
        <div className={style.parrafo}>
        <div className={style.text}>Actuar con rectitud en el cumplimiento de nuestra labor diaria, teniendo como guía la sinceridad y la coherencia de nuestras acciones dentro de un marco de integridad y transparencia.</div>
        <img src={honradez} className={style.imagenes}/>
        </div>
        <div className={style.titulo}>HUMILDAD</div>
        <div className={style.parrafo}>
        <div className={style.text}>Reconocer nuestras debilidades, cualidades y capacidades y aprovecharlas para obrar en bien de los demás, sin decirlo. Reconocemos la propia realidad, sin caer en la arrogancia.</div>
        <img  src={humildad} className={style.imagenes}/>
        </div>
        
        <div className={style.titulo}>TRABAJO EN EQUIPO</div>
        <div className={style.parrafo}>
        <div className={style.text}>Estimular la participación de todos los integrantes de la empresa, reconociendo que el esfuerzo conjunto es clave para cumplir con los objetivos y mantener altos estándares de calidad.</div>
        <img  src={trabajo} className={style.imagenes}/>
        </div>
        <div className={style.titulo}>PUNTUALIDAD</div>
        <div className={style.parrafo}>
        
        <div className={style.text}>Cumplir con la entrega de una tarea con una obligación, dentro del tiempo estipulado y totalmente comprometido a la realización de ésta.</div>
        <img src={puntualidad} className={style.imagenes}/>
        </div>
    </div>
  )
}

export default valores
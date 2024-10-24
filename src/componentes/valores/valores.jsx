

import style from "./valores.module.css"
function valores() {
  return (
    <div className={style.contenedor}>
        <div className={style.titulo}>CALIDAD</div>
        <div>Ofrecer productos de alto valor nutricional, elaborados bajo estrictos estándares de calidad y salubridad en nuestras plantas de producción</div>
        <div className={style.titulo}>HONRADEZ</div>
        <div>Actuar con rectitud en el cumplimiento de nuestra labor diaria, teniendo como guía la sinceridad y la coherencia de nuestras acciones dentro de un marco de integridad y transparencia.</div>
        <div className={style.titulo}>HUMILDAD</div>
        <div>Reconocer nuestras debilidades, cualidades y capacidades y aprovecharlas para obrar en bien de los demás, sin decirlo. Reconocemos la propia realidad, sin caer en la arrogancia.</div>
        <div className={style.titulo}>TRABAJO EN EQUIPO</div>
        <div>Estimular la participación de todos los integrantes de la empresa, reconociendo que el esfuerzo conjunto es clave para cumplir con los objetivos y mantener altos estándares de calidad.</div>
        <div className={style.titulo}>PUNTUALIDAD</div>
        <div>Cumplir con la entrega de una tarea con una obligación, dentro del tiempo estipulado y totalmente comprometido a la realización de ésta.</div>
    </div>
  )
}

export default valores
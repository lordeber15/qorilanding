import style from "../misionvision/misionvision.module.css"
function misionvision() {
  return (
    <div className={style.contenedor}>
        <div className={style.titulo}>MISIÓN</div>
        <div > 
        Somos una empresa dedicada a la producción y comercialización de pastas y snacks, ofrecemos alimentos de alto valor nutricional con propiedades nutritivas, buscamos satisfacer las necesidades de nuestros clientes, entregándoles productos de calidad e inocuidad con un buen servicio a precios accesibles, utilizando constantemente estándares de calidad, manteniendo la eficiencia e innovación de procesos, además estamos comprometidos con el desarrollo de la sociedad, generando empleo en la región de Ayacucho.</div>
        <div className={style.titulo}>VISIÓN</div>
        <div>Ser una empresa líder en la producción y comercialización de productos saludables y nutritivos a base de cereales andinos orgánicos y convencionales con innovación en su proceso y desarrollo sostenible. Ser reconocido por nuestros clientes, proveedores y competidores, abarcando gran parte del mercado regional, nacional e internacional gracias a sus alianzas con empresas privadas y convenios con el estado, posicionándonos en la mente de cada ciudadano.</div>
    </div>
  )
}

export default misionvision
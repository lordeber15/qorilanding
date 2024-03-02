import style from "./cardetalle.module.css";

function cardetalle({ titulop1, titulop2, lista }) {
  return (
    <span className={style.cardpasta}>
      <span className={style.titlepasta}>
        {titulop1}
        <span className={style.titleorganica}>&nbsp;{titulop2}</span>
      </span>
      <ul className={style.lista}>
        {lista.map((l, index) => (
          <li className={style.listau} key={index}>
            {l.des}
          </li>
        ))}
      </ul>
    </span>
  );
}

export default cardetalle;

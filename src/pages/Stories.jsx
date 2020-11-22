import React from 'react';
import UlRemittance from './UlRemittance'
import style from './UlRemittance.scss'

function Stories () {
    return (
    <ul >
      <li>
        <p className={style.index}>№</p>
        <p className={style.number}>Карта плательщика</p>
        <p className={style.number}>Карта получателя</p>
        <p className={style.amount}>Сумма</p>
        <p className={style.date}>Дата </p>
        <p className={style.buttons}>Действие</p>
      </li>
      <UlRemittance/>
    </ul>
    )

}
export default Stories;
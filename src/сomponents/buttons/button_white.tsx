import Vector from '../../img/vector.svg?react';
import s from './style.module.css';

export const ButtonWhite = (props) =>{
    return(
        <>
            <button className={s.button_white}>
                <p>{props.name}</p>
                <Vector/>
            </button>

        </>
    )
}
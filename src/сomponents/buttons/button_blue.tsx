import Vector from '../../img/vector.svg?react';
import s from './style.module.css';

export const ButtonBlue = (props) =>{
    return(
        <>
            <button className={s.button_blue} onClick={props.onClick}>
                <p>{props.name}</p>
                <Vector/>
            </button>

        </>
    )
}
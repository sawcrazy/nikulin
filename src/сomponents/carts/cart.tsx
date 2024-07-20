import {ButtonWhite} from "../buttons/button_white";
import s from './style.module.css';

export const Cart = (props) =>{
    return(
            <div className={s.cart}>
                <div className={s.cart__img}>
                    <img src={props.img} alt="img"/>
                </div>
                <div className={s.cart__name}>
                    <h4>{props.name}</h4>
                </div>
                <div className={s.cart__button}>
                    <ButtonWhite name="Посмотреть демо"/>
                </div>
            </div>
    )
}


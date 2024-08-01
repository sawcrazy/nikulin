import {ButtonBlue} from "../buttons/button_blue";
import s from './style.module.css';

export const CartPrice = (props) =>{
    const renderList = () =>{
        return props.info.map((item) =>{
            return (
                <li>
                    {item}
                </li>
            )
        })
    }
    return(
            <div className={s.cart_price}>
                <div>
                    <h4>{props.name}</h4>
                </div>
                <div className={s.cart_price__info}>
                    <ul>
                        {renderList()}
                    </ul>
                </div>
                <div className={s.cart_price__price}>
                    <h2>{props.price}</h2>
                </div>
                <div className="cart_price__button">
                    <ButtonBlue name="Купить тариф"/>
                </div>
            </div>
    )
}
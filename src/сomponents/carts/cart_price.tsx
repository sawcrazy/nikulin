import {ButtonWhite} from "../buttons/button_white";
import {ButtonBlue} from "../buttons/button_blue";

export const CartPrice = (props) =>{
    return(
        <>
            <div className="cart_price">
                <div className="cart_price__name">
                    <h4>{props.name}</h4>
                </div>
                <div className="cart_price__info">
                    {props.info}
                </div>
                <div className="cart_price__price">
                    {props.price}
                </div>
                <div className="cart_price__button">
                    <ButtonBlue name="Купить тариф"/>
                </div>
            </div>
        </>
    )
}
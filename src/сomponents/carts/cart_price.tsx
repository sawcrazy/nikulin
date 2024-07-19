
import {ButtonBlue} from "../buttons/button_blue";

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
        <>
            <div className="cart_price">
                <div className="cart_price__name">
                    <h4>{props.name}</h4>
                </div>
                <div className="cart_price__info">
                    <ul>
                        {renderList()}
                    </ul>
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
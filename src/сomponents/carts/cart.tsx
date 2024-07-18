import {ButtonWhite} from "../buttons/button_white";

export const Cart = (props) =>{
    return(
        <>
            <div className="cart">
                <div>
                    <img src={props.img} alt=""/>
                </div>
                <div className="cart__name">
                    <h4>{props.name}</h4>
                    <ButtonWhite name="Посмотреть демо"/>
                </div>
            </div>
        </>
    )
}


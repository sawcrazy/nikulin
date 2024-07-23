import s from './style.module.css';
import {Input} from "../inputs/input";
import {ButtonBlue} from "../buttons/button_blue";
import {InputCheckbox} from "../inputs/input_checkbox";


export const Modal = (props) =>{
    if(!props.open){
        return null;
    }
    return (
        <div className={s.modal}>
            <div className= {s.modal__widow}>
                <div className={s.modal__title}>
                    <button className={s.modal_button_close} onClick={props.onClick} > </button>
                    <div>
                        <h4>{props.title}</h4>
                    </div>
                </div>
                    <form action="" className={s.modal__form}>
                        {props.children}
                    </form>
            </div>
        </div>
    )
}
import {Modal} from "./modal";
import {Input} from "../inputs/input";
import {InputCheckbox} from "../inputs/input_checkbox";
import {ButtonBlue} from "../buttons/button_blue";
import s from "./style.module.css";

export const ModalIn = (props) =>{
    return(
        <Modal title={props.title} open={props.open} onClick={props.onClick}>
            <Input type="email" placeholder="Email" style="input"/>
            <Input type="password" placeholder="Пароль" style="input"/>
            <InputCheckbox>
                Я согласен с условиями <a href="">обработки персональных данных</a>
            </InputCheckbox>
            <ButtonBlue name="Войти в аккаунт"/>
            <div className={s.modal__footer}>
                Еще нет аккаунта? <a href="">Создать аккаунт</a>
            </div>
        </Modal>
    )
}
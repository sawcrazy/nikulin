import {Modal} from "./modal";
import {Input} from "../inputs/input";
import {InputCheckbox} from "../inputs/input_checkbox";
import {ButtonBlue} from "../buttons/button_blue";
import s from "./style.module.css";

export const ModalCreate = (props) =>{
  return(
    <Modal title={props.title} open={props.open} onClick={props.onClick}>
      <Input type="text" placeholder="Ваше имя" style="input"/>
      <Input type="email" placeholder="Email" style="input"/>
      <Input type="password" placeholder="Пароль" style="input"/>
      <InputCheckbox/>
      <ButtonBlue name="Создать аккаунт"/>
      <div className={s.modal__footer}>
        Еще нет аккаунта? <a href="">Создать аккаунт</a>
      </div>
    </Modal>
  )
}

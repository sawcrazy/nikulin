import {Modal} from "./modal";
import {Input} from "../inputs/input";
import {ButtonBlue} from "../buttons/button_blue";
import {InputCheckbox} from "../inputs/input_checkbox";

export const ModalFeedback = (props) =>{
    return(
      <Modal title={props.title} open={props.open} onClick={props.onClick}>
          <Input type="text" placeholder="Имя" style="input"/>
          <Input type="tel" placeholder="Телефон" style="input"/>
          <InputCheckbox>
              Я согласен с условиями обработки <a href="">персональных данных</a>
          </InputCheckbox>
          <ButtonBlue name="Создать аккаунт"/>
      </Modal>
    )
}
import s from './style.module.css';

export const Modal = (props) =>{
    if(!props.open){
        return null;
    }
    return (
        <div className={s.modal}>
            <div className= {s.modal_widow}>
                <div className={s.modal_header}>
                    <div>
                        hello word
                    </div>
                    <button className={s.modal_button_close} onClick={props.onClick}>X</button>
                </div>
            </div>
        </div>
    )
}
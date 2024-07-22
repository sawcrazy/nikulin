import s from './style.module.css';
import './s.css'
export const Input = (props) =>{
    return (
            <input className={props.style} type={props.type} placeholder={props.placeholder} id={props.id}/>
    )
}
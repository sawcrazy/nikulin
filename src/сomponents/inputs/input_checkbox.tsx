import s from "./style.module.css"
export const InputCheckbox = (props) =>{
  return (
      <div className={s.checkbox}>
          <input type="checkbox"/>
          <div>{props.children}</div>
      </div>
  )
}
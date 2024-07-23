import s from "./style.module.css"
export const InputCheckbox = () =>{
  return (
      <div className={s.checkbox}>
          <input type="checkbox"/>
          <div>Я согласен с условиями <a href="">обработки персональных данных</a></div>
      </div>
  )
}
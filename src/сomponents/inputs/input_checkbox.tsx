import './s.css'
export const InputCheckbox = () =>{
  return (
    <label>
      <input className="checkbox" type="checkbox"/>
      <span>Я согласен с условиями обработки персональных данных</span>
    </label>
  )
}
import Logo from '/logo.png';
import Vector from '/vector.svg';
import './App.css'
export const App = ()=> {


  return (
    <>
        <div className="container">
            <header className="header">
                <a className="header__logo"><img src={Logo} alt="Logo"/></a>
                <nav className="header__menu">
                    <ul>
                        <li><a href="">О сервисе</a></li>
                        <li><a href="">Возможности</a></li>
                        <li><a href="">Тарифы</a></li>
                        <li><a href="">О Нас</a></li>
                        <li><a href="">Приложения</a></li>
                    </ul>
                </nav>
                <div >
                    <button className="header__button">
                        <p>Запустить редактор</p>
                        <img src={Vector} alt="vector"/>
                    </button>
                </div>
            </header>
        </div>
    </>
  )
}

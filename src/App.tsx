import Logo from './img/logo.svg';
import Video from './img/video.png'
import Vector from "./img/vector.svg?react";
import './App.css'
export const App = ()=> {
  return (
    <>
            <header className="header">
                <a className="header__logo"><img src={Logo} alt="Logo"/></a>
                <nav className="header__menu">
                    <ul>
                        <li><a href="">О сервисе</a></li>
                        <li><a href="">Возможности</a></li>
                        <li><a href="">Тарифы</a></li>
                        <li><a href="">О нас</a></li>
                        <li><a href="">Приложения</a></li>
                    </ul>
                </nav>
                <div >
                    <button className="header__button">
                        <p>Запустить редактор</p>
                        <Vector/>
                    </button>
                </div>
            </header>
        <div className="container">
            <section className="possibilities">
                <div className="possibilities__text">
                    <div className="possibilities__title">
                        <h1>Визуализируйте и объясняйте лучше, используя интерактивное 3D и AR</h1>
                    </div>
                    <p>Встречайте Vectary, онлайн-платформу для создания и
                        управления интерактивными
                        <br/>
                        3D- и AR-проектами,
                        которые вдохновляют, обучают и решают проблемы.
                        <br/>
                        ‍Никаких загрузок, никакого кода: все в браузере.
                    </p>
                </div>
                <button className="possibilities__button">
                    <p>Попробовать бесплатно</p>
                    <Vector/>
                </button>
                <img src={Video} alt="Video" className="possibilities__img"/>
            </section>
        </div>
    </>
  )
}

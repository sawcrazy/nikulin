import Logo from '/vite.svg';
import './App.css'
export const App = ()=> {


  return (
    <>
        <div className="container">
            <header className="header">
                <div className="logo">
                    <img src={Logo} alt=""/>

                </div>
                <nav className="menu">
                    <ul>
                        <li>О сервисе</li>
                        <li>Возможности</li>
                        <li>Тарифы</li>
                        <li>О Нас</li>
                        <li>Приложения</li>
                    </ul>
                </nav>
                <div>
                    <button>
                        push me
                    </button>
                </div>
            </header>
        </div>
    </>
  )
}

import Logo from './img/logo.svg';
import LogoWhite from './img/logo_white.svg'
import Footer from './img/footer.png';
import Email from  './img/email.svg';
import Phone from './img/phone.svg';
import './App.css'
import {ButtonBlue} from './сomponents/buttons/button_blue';
import {ButtonWhite} from "./сomponents/buttons/button_white";
import {Cart} from "./сomponents/carts/cart";
import {arrCart, arrCartPrice} from "./const";
import {CartPrice} from "./сomponents/carts/cart_price";

export const App = ()=> {

   const renderCarts = () =>{
        return arrCart.map((item) => {
            return (
                <Cart name={item.name} img={item.img}/>
            )
        });
    };
   const renderCartsPrice = () =>{
       return arrCartPrice.map((item) =>{
           return (
               <div>
                   <CartPrice name={item.name} info={item.info} price={item.prise}/>
               </div>
           )
       })
   }
  return (
    <>
            <header className="header">
                <a className="header__logo"><img src={Logo} alt="Logo"/></a>
                <nav className="header__menu">
                    <ul>
                        <li><a href="">О сервисе</a></li>
                        <li><a href="">Возможности</a></li>
                        <li><a href="#price">Тарифы</a></li>
                        <li><a href="">О нас</a></li>
                        <li><a href="">Приложения</a></li>
                    </ul>
                </nav>
                <div >
                    <ButtonBlue name="Запустить редактор"/>
                </div>
            </header>
        <div className="container">
            <section className="possibilities">
                <div className="possibilities__title">
                    <div>
                        <h1>Визуализируйте и объясняйте лучше, используя интерактивное 3D и AR</h1>
                    </div>
                    <div>
                        Встречайте Vectary, онлайн-платформу для создания и
                        управления интерактивными
                        <br/>
                        3D- и AR-проектами,
                        которые вдохновляют, обучают и решают проблемы.
                        <br/>
                        ‍Никаких загрузок, никакого кода: все в браузере.
                    </div>
                    <div>
                        <div>
                            <ButtonBlue name="Попробовать бесплатно"/>
                        </div>
                    </div>
                </div>
                <div className="possibilities__contend">
                </div>

            </section>
            <section className="girl">
                <div className="girl__title">
                    <div>
                        <h2>Расширяем возможности малых и крупных команд</h2>
                    </div>
                    <div>
                        Воспользуйтесь преимуществами наличия инструментов смешанной
                        <br/>
                        реальности на одной платформе. Импортируйте 3D-файлы или создавайте
                        <br/>
                        свои собственные модели. Просматривайте их в дополненной реальности
                        <br/>
                        или с помощью гарнитуры VR.
                    </div>
                    <div>
                        <ButtonBlue name="Узнать подробнее"/>
                    </div>
                </div>
                <div className="girl__cart">
                    <div className="girl__cart_1">
                        <div className="girl__cart_1__content">
                            <div>
                                <h3>
                                    Разработка проектов под ключ
                                </h3>
                            </div>
                            <div>
                                Разработка дополненной реальности для ваших
                                <br/>
                                продуктов под ключ, что включает в себя: создание
                                <br/>
                                объемных моделей, 3D-просмотр для компьютеров,
                                <br/>
                                3D и AR просмотр для мобильных устройств в
                                <br/>
                                браузере
                            </div>
                            <div>
                                <ButtonWhite name="Узнать больше"/>
                            </div>
                        </div>
                    </div>
                    <div className="girl__cart_2">
                        <div className="girl__cart_2__content">
                            <div>
                                <h3>
                                    Разработка проектов под ключ
                                </h3>

                            </div>
                            <div>
                                Разработка дополненной реальности для ваших
                                <br/>
                                продуктов под ключ, что включает в себя: создание
                                <br/>
                                объемных моделей, 3D-просмотр для компьютеров,
                                <br/>
                                3D и AR просмотр для мобильных устройств в
                                <br/>
                                браузере
                            </div>
                            <div>
                                <ButtonWhite name="Узнать больше"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="for_whom">
                <div className="for_whom__title">
                    <h2>Для кого</h2>
                </div>
                <div className="for_whom__cart">
                    {renderCarts()}
                </div>
            </section>
            <section className="price" id="price">
                <div className="price__title">
                    <h2>
                        Тарифы
                    </h2>
                </div>
                <div className="price__content">
                    {renderCartsPrice()}
                </div>

            </section>
            <section className="show">
                <div className="show__title">
                    <h2>
                        Хотите увидеть примеры нашей дополненной реальности?
                    </h2>
                </div>
                <div>
                    <ButtonBlue name="Связаться с нами"/>
                </div>
            </section>
        </div>
        <footer className="footer">
            <div className="footer__stripes">
                <img src={Footer} alt="footer"/>
            </div>
            <div className="footer__content">
                <a className="header__logo">
                    <img src={LogoWhite} alt="Logo"/>
                </a>
                <nav className="footer__menu">
                    <ul>
                        <li><a href="">О сервисе</a></li>
                        <li><a href="">Возможности</a></li>
                        <li><a href="">Тарифы</a></li>
                        <li><a href="">О нас</a></li>
                        <li><a href="">Приложения</a></li>
                    </ul>
                </nav>
                <div>
                    <div>
                        <img src={Email} alt="email"/>
                        <a href="mailto:@test.roketar.com">@test.roketar.com</a>

                    </div>
                    <div>
                        <img src={Phone} alt="phone"/>
                        <a href="tel:++79999999999">+7 (999) 999-99-99</a>

                    </div>
                </div>
            </div>
            <div className="footer__end">
                <ul>
                    <li><a href="">Персональные данные</a></li>
                    <li><a href="">Политика сайта</a></li>
                    <li><a href="">Куки</a></li>
                </ul>
            </div>
        </footer>
    </>
  )
}

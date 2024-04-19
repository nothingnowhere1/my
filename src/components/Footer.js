import React from "react"
import ReactDOM from 'react-dom/client';

import '../pages/iteminfo.css';

export class Footer extends React.Component{
    render(){
        return (
            <>
                <footer className="footer">
                    <div className="container2">
                        <div className="footer-column">
                            <span>КОМПАНИЯ<br /><br />
                                О бренде<br />
                                Работа<br />
                                Контакты<br />
                                Подарочные карты<br />
                                MY CLUB<br />
                            </span>
                        </div>
                        <div className="footer-column">
                            <span>ПОМОЩЬ<br /><br />
                                Магазины<br />
                                Оплата<br />
                                Доставка<br />
                                Как вернуть товар<br />
                            </span>
                        </div>
                        <div className="footer-column">
                            <span>МЫ В СОЦСЕТЯХ<br /><br />
                                Вконтакте<br />
                                Телеграм<br />
                            </span>
                        </div>
                        <div className="footer-contact">
                            <span>8 800 555-56-96<br />
                                Ежедневно с 9:00 до 21:00 по Москве
                            </span>
                        </div>
                    </div>
                </footer>
            </>)
    }
}

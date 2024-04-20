import React from "react";

import './sc.css';

import { logo_1x, logo_2x, logo_4x, shirt1_1x,shirt1_2x,shirt1_4x,shirt1_1_1x,shirt1_1_2x,shirt1_1_4x, shirt2_1x,shirt2_2x,shirt2_4x,shirt3_1x, shirt3_2x, shirt3_4x,shirt4_1x,shirt4_2x,shirt4_4x,shirt5_1x, shirt5_2x, shirt5_4x, shirt6_1x,shirt6_2x,shirt6_4x} from '../assets/images'


const Catalog = () => {
    return(
        <>
            <header>
                <div className="left-header">
                    <svg className="menu" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
                </div>
                <div className="logo">
                    <img src={logo_4x} srcSet={`${logo_1x} 220w, ${logo_2x} 445w, ${logo_4x} 880w`} alt="Логотип" className="logo" width="100" height="100" />
                </div>
                <div className="right-header">
                    
                    <svg className = "search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
                    <svg className = "cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z"/></svg>
                </div>
            </header>
            <main>
            <div className="half-screen">
                <div className="text-overlay">    
                    <span className="large">SALE<br /> </span>
                    <span className="small">for new collection</span>
                </div>
            </div>
            <section className="container">
                <div className="screen">
                    <img className="photo" src={shirt1_1x} srcSet={`${shirt1_1x} 220w, ${shirt1_2x} 445w, ${shirt1_4x} 880w`}
                                alt="ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ"/>
                    <div className="text">    
                        <span className = "textitem"><br />ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ </span>
                        <span className = "textprice"><br />1500 руб.</span>
                    </div>
                </div>
                    <div className="screen">
                    <img className="photo" src={shirt2_1x} 
                        srcSet={`${shirt2_1x} 220w, ${shirt2_2x} 445w, ${shirt2_4x} 880w`} alt="ХУДИ УТЕПЛЕННОЕ"/>
                    <div className="text">    
                        <span className = "textitem"><br />ХУДИ УТЕПЛЕННОЕ</span>
                        <span className = "textprice"> <br /> 1500 руб.</span>
                    </div>
                </div>
                <div className="screen">
                    <img className="photo" src={shirt3_1x} srcSet={`${shirt3_1x} 220w, ${shirt3_2x} 445w, ${shirt3_4x} 880w`} alt="ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ"/>
                    <div className="text">    
                        <span  className = "textitem"><br />ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ</span>
                        <span className = "textprice"> <br />1500 руб.
                            </span>
                    </div>
                </div>
                </section>
                
                <section className="container">
                <div className="screen">
                    <img className="photo" src={shirt4_1x}  srcSet={`${shirt4_1x} 220w, ${shirt4_2x} 445w, ${shirt4_4x} 880w`} alt="ТРЕНЧ ЖЕНСКИЙ"/>
                    <div className="text">    
                        <span className = "textitem"><br />ТРЕНЧ ЖЕНСКИЙ</span>
                        <span className = "textprice"> <br />1500 руб.
                            </span>
                    </div>
                </div>
                <div className="screen">
                    <img className="photo" src={shirt5_1x}   srcSet={`${shirt5_1x} 220w, ${shirt5_2x} 445w, ${shirt5_4x} 880w`} alt="ЗИП ХУДИ ОВЕРСАЙЗ С ПРИНТОМ"/>
                    <div className="text">    
                        <span className = "textitem"><br />ЗИП ХУДИ ОВЕРСАЙЗ С ПРИНТОМ</span>
                        <span className = "textprice"> <br />1500 руб.
                            </span>
                    </div>
                </div>
                    <div className="screen">
                    <img className="photo" src={shirt6_1x}  srcSet={`${shirt6_1x} 220w, ${shirt6_2x} 445w, ${shirt6_4x} 880w`} alt="ДЖИНСОВАЯ РУБАШКА С ДЛИННЫМ РУКАВОМ" />
                    <div className="text">    
                        <span className = "textitem"><br />ДЖИНСОВАЯ РУБАШКА С ДЛИННЫМ РУКАВОМ</span>
                        <span className = "textprice"> <br />1500 руб.
                            </span>
                    </div>
                </div>
                    </section>
                <hr style={{ color: 'gray', marginTop: 60}} />
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
            </main>
        </>
    )
}

export default Catalog;
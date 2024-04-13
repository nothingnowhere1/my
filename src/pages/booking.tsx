import React from "react";

import './styles_for_booking.css';

<<<<<<< HEAD
import { logo_1x } from '../assets/images'
import { logo_2x } from '../assets/images'
import { logo_4x } from '../assets/images'
import { shirt1_1x } from '../assets/images'
import { shirt1_2x } from '../assets/images'
import { shirt1_4x } from '../assets/images'
import { shirt6_1x } from '../assets/images'
import { shirt6_2x } from '../assets/images'
import { shirt6_4x } from '../assets/images'
=======
import { logo_1x, logo_2x } from '../assets/images'
>>>>>>> 414a64f3956f036fae99b4de551d5d7082a5a9ff

const Booking = () => {
  return (
    <>
      <header className="logo-container">
<<<<<<< HEAD
        <img
          src={logo_4x}
          srcSet={`${logo_1x} 220w, ${logo_2x} 445w, ${logo_4x} 880w`}
          alt="Логотип"
          className="logo"
          width={100}
          height={100}
        />
=======
        <img src={logo_1x} alt="Логотип" className="logo" />
>>>>>>> 414a64f3956f036fae99b4de551d5d7082a5a9ff
      </header>
      <main>
        <section className="container">
          <div className="items-column">
            <article className="item">
              <img className="item-image" src={shirt6_4x}  srcSet={`${shirt6_1x} 220w, ${shirt6_2x} 445w, ${shirt6_4x} 880w`} alt="Товар 1"> </img>
              <div className="item-details">
                <h2>
                ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ
                </h2>
                <p>Размер: M/L</p>
                <p>Цвет: Серый</p>
                <p className="price">1500 р</p>
                <div className="quantity-controls">
                  <button className="quantity-control minus">-</button>
                  <span className="quantity">2</span>
                  <button className="quantity-control plus">+</button>
                </div>
              </div>
            </article>
            <article className="item">
            <img className="item-image" src={shirt1_4x}  srcSet={`${shirt1_1x} 220w, ${shirt1_2x} 445w, ${shirt1_4x} 880w`} alt="Товар 2"> </img>
              <div className="item-details">
                <h2>ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ</h2>
                <p>Размер: M/L</p>
                <p>Цвет: Чёрный</p>
                <p className="price">1000 р</p>
                <div className="quantity-controls">
                  <button className="quantity-control minus">-</button>
                  <span className="quantity">1</span>
                  <button className="quantity-control plus">+</button>
                </div>
              </div>
            </article>
          </div>
          <aside className="info-column">
            <form action="#" className="booking-form">
              <label htmlFor="firstName">Имя:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Иван"
                required
              />

              <label htmlFor="lastName">Фамилия:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Иванов"
                required
              />

              <label htmlFor="phoneNumber">Номер телефона:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                pattern="+7([0-9]{3})[0-9]{3}-[0-9]{2}-[0-9]{2}"
                placeholder="+7(999)999-99-99"
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="почта@mail.ru"
                required
              />

              <p>3 товара 4000 р</p>
              <p>Скидка - 1500 р</p>
              <p>Итого к оплате 2500 р</p>

              <button type="submit" className="book-button">
                Подтвердить
              </button>
            </form>
          </aside>
        </section>
        <hr style={{ color: 'gray' }} />
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
  );
};

export default Booking;
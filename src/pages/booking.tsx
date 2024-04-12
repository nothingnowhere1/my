import React from "react";

import './styles_for_booking.css';

import { logo_1x, logo_2x } from '../assets/images'

const Booking = () => {
  return (
    <>
      <header className="logo-container">
        <img src={logo_1x} alt="Логотип" className="logo" />
      </header>
      <main>
        <section className="container">
          <div className="items-column">
            <article className="item">
              <img
                src="images/shirt3.png"
                alt="Товар 1"
                className="item-image"
              />
              <div className="item-details">
                <h2>
                  ФУТБОЛКА ТРЕТЬЯКОВСКАЯ ГАЛЕРЕЯ АЙВАЗОВСКИЙ И. «ЧЕРНОЕ МОРЕ»
                  «ЛУННАЯ НОЧЬ НА КАПРИ»
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
              <img
                src="images/shirt8.png"
                alt="Товар 2"
                className="item-image"
              />
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
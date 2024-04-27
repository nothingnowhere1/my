import React from "react"

import {
    Footer1,
    Container2,
    Footer_column,
    Footer_contact,
    Span,
  } from "./all-footer.style";

export const Footer = (props) =>(
    <>
        <hr style={{ color: 'gray', marginTop: 60}} />
        <Footer1>
            <Container2>
                <Footer_column>
                    <Span>КОМПАНИЯ<br /><br />
                        О бренде<br />
                        Работа<br />
                        Контакты<br />
                        Подарочные карты<br />
                        MY CLUB<br />
                    </Span>
                </Footer_column>
                <Footer_column>
                    <Span>ПОМОЩЬ<br /><br />
                        Магазины<br />
                        Оплата<br />
                        Доставка<br />
                        Как вернуть товар<br />
                    </Span>
                </Footer_column>
                <Footer_column>
                    <Span>МЫ В СОЦСЕТЯХ<br /><br />
                        Вконтакте<br />
                        Телеграм<br />
                    </Span>
                </Footer_column>
                <Footer_contact>
                    <Span>8 800 555-56-96<br />
                        Ежедневно с 9:00 до 21:00 по Москве
                    </Span>
                </Footer_contact>
            </Container2>
        </Footer1>
    </>
)

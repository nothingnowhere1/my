import React from "react"

import {
    Details,
    Div,
    Spisok,
    Hr,
    Opis,
  } from "./info-description.style";

export const Info_description = () =>( 
    <>
        <Hr/>
        <Details>
            <Opis>Описание</Opis>
            <Div>
                <Spisok>
                    Артикул:<br/>
                    Коллекция:<br/>
                    Специальная коллекция:<br/>
                    Вид застежки:<br/>
                    Цвет:<br/>
                    Состав:<br/>
                    Силуэт:<br/>
                    Узор:<br/>
                    Длина:<br/>
                    Параметры модели, см:<br/>
                    Рост модели, см:<br/>
                    Размер на модели:<br/>
                    Тип карманов:<br/>
                    Плотность материала, г/м2:<br/>
                    Пол:
                </Spisok>
                <Spisok style={{marginLeft: "40px"}}>
                    79776<br/>
                    Весна-Лето 2021<br />
                    Третьяковская галерея<br />
                    без застежки<br />
                    темно-серый<br />
                    100% Хлопок<br />
                    свободный<br />
                    надписи<br />
                    удлиненная<br />
                    101-78-96<br />
                    189<br />
                    L (50)<br />
                    без карманов<br />
                    160<br />
                    Женский
                </Spisok>
            </Div>
        </Details>
        <Hr />
    </>
)
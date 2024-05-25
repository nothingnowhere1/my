import React from "react"

import {
    Details,
    Div,
    Spisok,
    Hr,
    Opis,
  } from "./info-description.style";

export const Info_description = ({props}) =>( 
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
                    {props.body[0]} <br />
                    {props.body[1]} <br />
                    {props.body[2]} <br />
                    {props.body[3]} <br />
                    {props.body[4]} <br />
                    {props.body[5]} <br />
                    {props.body[6]} <br />
                    {props.body[7]}<br />
                    {props.body[8]} <br />
                    {props.body[9]} <br />
                    {props.body[10]} <br />
                    {props.body[11]}<br />
                    {props.body[12]} <br />
                    {props.body[13]} <br />
                    {props.body[14]} <br />
                </Spisok>
            </Div>
        </Details>
        <Hr />
    </>
)
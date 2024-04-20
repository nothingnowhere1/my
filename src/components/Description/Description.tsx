import React from "react"


export class Description extends React.Component{
    render(){
        return (
            <>
                <hr />
                <details>
                    <summary className="opis">Описание</summary>
                    <div style={{display: 'flex'}}>
                        <p className="spisok">
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
                        </p>
                        <p className="spisok" style={{marginLeft: "20px"}}>
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
                        </p>
                    </div>
                </details>
                <hr />
            </>)
    }
}
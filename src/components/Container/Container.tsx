import React from "react";
import { Container_screen } from "../container-screen";


const container = [
    {photo: 'shirt2_1x',
    alt :"ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ", 
    name: "ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ", 
    price: "1500 руб.",
    setphoto: ['shirt2_1x','shirt2_2x', 'shirt2_4x']},
    {photo: 'shirt3_1x',
    alt :"ХУДИ УТЕПЛЕННОЕ", 
    name: "ХУДИ УТЕПЛЕННОЕ", 
    price: "1500 руб.",
    setphoto: ['shirt3_1x','shirt3_2x', 'shirt3_4x']},
    {photo: 'shirt4_1x',
    alt :"ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ", 
    name: "ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ", 
    price: "1500 руб.",
    setphoto: ['shirt4_1x','shirt4_2x', 'shirt4_4x']}
];

export class Container extends React.Component{
    render () {
        return (
        <>
           <section className="container">
                    <Container_screen photo = {container[0].photo} alt= {container[0].alt} name = {container[0].name} price ={container[0].price} setphoto = {container[0].setphoto}/>
                    <Container_screen photo = {container[1].photo} alt= {container[1].alt} name = {container[1].name} price ={container[1].price} setphoto = {container[1].setphoto}/>
                    <Container_screen photo = {container[2].photo} alt= {container[2].alt} name = {container[2].name} price ={container[2].price} setphoto = {container[2].setphoto}/>
            </section>
        </>)
    }
}
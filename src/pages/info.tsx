import React from "react";

import {Header} from '../components/catalog-header/catalog-header';
import {Item} from '../components/info-item/info-item';
import {Description} from '../components/info-description/info-description';
import { Container } from "../components/catalog-container/catalog-container";
import {Footer} from '../components/all-footer/all-footer';

const data =[
    [{photo: 'shirt2_1x',
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
    setphoto: ['shirt4_1x','shirt4_2x', 'shirt4_4x']}],
    [{photo: 'shirt5_1x',
    alt :"ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ", 
    name: "ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ", 
    price: "1500 руб.",
    setphoto: ['shirt5_1x','shirt5_2x', 'shirt5_4x']},
    {photo: 'shirt6_1x',
    alt :"ХУДИ УТЕПЛЕННОЕ", 
    name: "ХУДИ УТЕПЛЕННОЕ", 
    price: "1500 руб.",
    setphoto: ['shirt6_1x','shirt6_2x', 'shirt6_4x']},
    {photo: 'shirt1_1x',
    alt :"ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ", 
    name: "ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ", 
    price: "1500 руб.",
    setphoto: ['shirt1_1x','shirt1_2x', 'shirt1_4x']}]
];

const Iteminfo = () => {
    return(
        <>
            <Header/>
            <main>
                <Item/>
                <Description/>
                <Container props={data[0]}/>
            </main>
            <Footer/>
        </>
    )
}

export default Iteminfo;
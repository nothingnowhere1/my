import React from "react";

import './item-info.css';

import { logo_1x, logo_2x, logo_4x, shirt1_1x,shirt1_2x,shirt1_4x,shirt1_1_1x,shirt1_1_2x,shirt1_1_4x, shirt2_1x,shirt2_2x,shirt2_4x,shirt3_1x, shirt3_2x, shirt3_4x,shirt4_1x,shirt4_2x,shirt4_4x,shirt5_1x, shirt5_2x, shirt5_4x, shirt6_1x,shirt6_2x,shirt6_4x} from '../assets/images'
import {Header} from '../components/header/Header';
import {Item} from '../components/Item/Item';
import {Description} from '../components/description/description';
import { Container } from "../components/container/container";
import {Footer} from '../components/footer/footer';

const Iteminfo = () => {
    return(
        <>
            <Header/>
            <main>
                <Item/>
                <Description/>
                <Container/>
            </main>
            <Footer/>
        </>
    )
}

export default Iteminfo;
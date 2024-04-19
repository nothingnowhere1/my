import React from "react";

import './iteminfo.css';

import {Header} from '../Component/Header';
import {Item} from '../Component/Item';
import {Description} from '../Component/Description';
import {Container} from '../Component/Container';
import {Footer} from '../Component/Footer';

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
import React from "react";

import './iteminfo.css';

import {Header} from '../components/Header';
import {Item} from '../components/Item';
import {Description} from '../components/Description';
import {Container} from '../components/Container';
import {Footer} from '../components/Footer';

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
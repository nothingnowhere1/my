import React, { useEffect, useState } from "react";

import {Header} from '../components/catalog-header/catalog-header';
import {Item} from '../components/info-item/info-item';
import {Description} from '../components/info-description/info-description';
import { Container } from "../components/catalog-container/catalog-container";
import {Footer} from '../components/all-footer/all-footer';

const Iteminfo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/catalog-data')
            .then(response => response.json())
            .then(data => {
                setData(data.data);
            })
            .catch(error => {
                console.error('Error fetching catalog data:', error);
            });
    }, []);

    return(
        <>
            <Header/>
            <main>
                <Item/>
                <Description/>
                {data.map((item, index) => {
                if (index === 1) {
                    return <Container key={index} props={item} />;
                } else {
                    return null;
                }
            })}
            </main>
            <Footer/>
        </>
    )
}

export default Iteminfo;
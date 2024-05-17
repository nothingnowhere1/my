import React, { useEffect, useState } from "react";
import { Header } from '../components/catalog-header/catalog-header';
import { Container } from "../components/catalog-container/catalog-container";
import { Hero_section } from "../components/catalog-herosection";
import { Footer } from '../components/all-footer/all-footer';

const Catalog = () => {
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
            <Header />
            <main>
                <Hero_section />
                {data.map((item, index) => (
                    <Container key={index} props={item} />
                ))}
            </main>
            <Footer />
        </>
    )
}

export default Catalog;
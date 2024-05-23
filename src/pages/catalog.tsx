import React, { useEffect, useState } from "react";
import { Catalog_header } from '../components/catalog-header';
import { Catalog_container } from "../components/catalog-container";
import { Catalog_herosection } from "../components/catalog-herosection";
import { All_footer } from '../components/all-footer';

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
            <Catalog_header />
            <main>
                <Catalog_herosection />
                {data.map((item, index) => (
                    <Catalog_container key={index} props={item} />
                ))}
            </main>
            <All_footer/>
        </>
    )
}

export default Catalog;
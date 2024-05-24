import React, { useEffect, useState } from "react";

import {Catalog_header} from '../components/catalog-header';
import {Info_item} from '../components/info-item';
import {Info_description} from '../components/info-description';
import {Catalog_container } from "../components/catalog-container";
import {All_footer} from '../components/all-footer';

const Info = () => {
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
            <Catalog_header/>
            <main>
                <Info_item/>
                <Info_description/>
                {data.map((item, index) => {
                if (index === 1) {
                    return <Catalog_container key={index} props={item} />;
                } else {
                    return null;
                }
            })}
            </main>
            <All_footer/>
        </>
    )
}

export default Info;
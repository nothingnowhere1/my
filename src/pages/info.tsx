import React, { useEffect, useState } from "react";

import {Catalog_header} from '../components/catalog-header';
import {Info_item} from '../components/info-item';
import {Info_description} from '../components/info-description';
import {Catalog_container } from "../components/catalog-container";
import {All_footer} from '../components/all-footer';
import { useParams } from "react-router-dom";

const Info = () => {
    const [catalogdata, setcatalogData] = useState([]);
    const [itemdata, setitemData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch('/api/catalog-data')
            .then(response => response.json())
            .then(catalogdata => {
                setcatalogData(catalogdata.data);
            })
            .catch(error => {
                console.error('Error fetching catalog data:', error);
            });
        fetch('/api/item-data')
            .then(response => response.json())
            .then(itemdata => {
                setitemData(itemdata.data);
            })
            .catch(error => {
                console.error('Error fetching catalog data:', error);
            });
    }, []);


    function findElementById(arr, id) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === id) {
                    return arr[i];
                }
            }
            return null;
    }


    return(
        <>
            <Catalog_header/>
                <main>
                    <Info_item/>
                    <Info_description/>
                    {catalogdata.map((item, index) => {
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
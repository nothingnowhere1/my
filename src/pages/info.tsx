import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {Catalog_header} from '../components/catalog-header';
import {Info_item} from '../components/info-item';
import {Info_description} from '../components/info-description';
import {Catalog_container } from "../components/catalog-container";
import {All_footer} from '../components/all-footer';
import { getConfigValue } from "@ijl/cli";


const Info = () => {
    const [catalogdata, setcatalogData] = useState([]);
    const [itemdata, setitemData] = useState([]);
    const id = useParams().itemId;

    useEffect(() => {
        fetch(getConfigValue("my.api")+'/catalog-data')
            .then(response => response.json())
            .then(catalogdata => {
                setcatalogData(catalogdata.data);
            })
            .catch(error => {
                console.error('Error fetching catalog data:', error);
            });
        fetch(getConfigValue("my.api")+'/item-data')
            .then(response => response.json())
            .then(itemdata => {
                setitemData(itemdata.data);
            })
            .catch(error => {
                console.error('Error fetching catalog data:', error);
            });
    }, []);
    if (!itemdata){
        return null;
    }
    const findElementById = (id) => itemdata.find(element => element.id == parseInt(id)) || null;
    const item_info = findElementById(id);

    return(
        <>
            <Catalog_header/>
                <main>
                    {item_info && (
                        <>
                            <Info_item {...item_info} />
                            <Info_description props = {item_info} />
                        </>
                    )}
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
import React, { useState, useEffect } from "react";

import { Booking_item } from "../booking-item";
import { Items_column } from "./booking-container.style";
import { Booking_aside } from "../booking-aside";
import { getConfigValue } from "@ijl/cli";



export const Booking_container = () => {

    const id = [1, 2];
    const [itemdata, setData] = useState([]);
    
    useEffect(() => {
        fetch(getConfigValue("my.api") + '/item1-data')
            .then(response => response.json())
            .then(itemdata => {
                const el =itemdata.data.map((element) => {
                    element.price = parseInt(element.price.replace(/[^\d]/g, ''), 10);
                    element.quantity = 1;
                    if (element.id === id[0] || element.id === id[1])
                        return element;
                    else return null;
                })
                setData(el.filter(Boolean))

            })
            .catch(error => {
                console.error('Error fetching catalog data:', error);
            });
    }, []);


    const setQuantity = (index, quantity) => {
        const newData = [...itemdata];
        newData[index].quantity = quantity;
        setData(newData);
    }

    return (
        <>
            <Items_column>
                {
                    itemdata.map((item, index) => (
                        <>
                            {
                                item && (
                                    <Booking_item
                                        key={item.id}
                                        photo={item.photo}
                                        name={item.name}
                                        price={item.price}
                                        setPhoto={item.setphoto}
                                        color="Белый"
                                        size="XS/S"
                                        alt={item.alt}
                                        quantity={item.quantity}
                                        setQuantity={(quantity) => setQuantity(index, quantity)} />
                                )
                            }
                        </>
                    ))
                }
            </Items_column>
            <Booking_aside data={itemdata} />
        </>
    );
};
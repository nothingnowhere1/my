import React, { useState, useEffect } from "react";
import { Booking_item } from "../booking-item";
import { Items_column } from "./booking-container.style";
import { Booking_aside } from "../booking-aside";

const initialData = [
    {
        id: 6,
        photo: 'shirt6_4x',
        alt: "ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ", 
        name: "ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ", 
        price: 1500,
        setPhoto: ['shirt6_1x', 'shirt6_2x', 'shirt6_4x'],
        color: "Серый",
        size: "M/L",
        quantity: 1
    },
    {
        id: 1,    
        photo: 'shirt1_1x',
        alt: "ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ", 
        name: "ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ", 
        price: 2000,
        setPhoto: ['shirt1_1x', 'shirt1_2x', 'shirt1_4x'],
        color: "Черный",
        size: "M/L",
        quantity: 1
    }
];

export const Booking_container = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('bookingData');
        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            setData(initialData); 
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('bookingData', JSON.stringify(data));
    }, [data]);

    const setQuantity = (index, quantity) => {
        const newData = [...data];
        newData[index].quantity = quantity;
        setData(newData);
    };

    return (
        <>
            <Items_column>
                {data.map((item, index) => (
                    <Booking_item
                        key={item.id}
                        photo={item.photo}
                        name={item.name}
                        price={item.price}
                        setPhoto={item.setPhoto}
                        color={item.color}
                        size={item.size}
                        alt={item.alt}
                        quantity={item.quantity}
                        setQuantity={(quantity) => setQuantity(index, quantity)}
                    />
                ))}
            </Items_column>
            <Booking_aside data={data} />
        </>
    );
};
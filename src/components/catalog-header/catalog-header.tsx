import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { logo_1x } from "../../assets/images";
import {
    Header1,
    Left_header,
    Logo,
    Right_header,
    Button,
    Cart,
    SearchButton, 
    SearchForm,
    Menu,
} from "./catalog-header.style";
import { Link } from "../all-link";
import { URLs } from "../../__data__/urls";
import { InputField } from "../field/field";

export const Catalog_header = () => {  
    const [searchValue, setSearchValue] = useState("");
    const [searchValueError, setSearchValueError] = useState(false);
    const searchInputRef = useRef<any>();
    const nav = useNavigate();

    useEffect(() => {
        searchInputRef.current.focus();
    }, []);

    useEffect(() => {
        if (/\d/.test(searchValue)) {
            setSearchValueError(true);
        } else {
            setSearchValueError(false);
        }
    }, [searchValue]);

    const handleSearchChange = (e) => {
        const value = e.currentTarget.value;
        setSearchValue(value);
    };

    const handleSubmitSearchForm = (event) => {
        event.preventDefault();
    
        fetch('/api/search', {
            method: 'POST',
            body: JSON.stringify({
                search: searchValue
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if (data && data.data && data.data.id) {
                nav(URLs.ui.itemDetail.getUrl(data.data.id));
            } else {
                nav(URLs.baseUrl);
            }
        })
        .catch(error => {
            console.error('Error searching data:', error);
        });
    };    

    return (
        <Header1>
            <Left_header>
                <Button type="button">
                    <Menu clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/>
                    </Menu>
                </Button>                
            </Left_header>
            <Link href={URLs.baseUrl}>
                <Logo>
                    <img src={logo_1x} alt="Логотип" width="100" height="100" />
                </Logo>
            </Link>
            <Right_header>
                <SearchForm onSubmit={handleSubmitSearchForm}>
                    <div style={{ position: 'relative', width: '100%' }}>
                        <InputField
                            inputRef={searchInputRef}
                            onChange={handleSearchChange}
                            value={searchValue}
                            placeHolder="Что ищем"
                        />
                        {searchValueError && <span style={{ color: 'red', position: 'absolute', bottom: '-30px', left: '0' }}>Некорректный ввод</span>}
                    </div>
                    <SearchButton type="submit" onClick={handleSubmitSearchForm}>Поиск</SearchButton>
                </SearchForm>
                <Link href={URLs.booking}>
                    <Button type="button">
                        <Cart xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z"/>
                        </Cart>
                    </Button>
                </Link>
            </Right_header>
        </Header1>
    );
};

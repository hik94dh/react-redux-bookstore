import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

const Filter = ({setFilter, filterBy}) => {

    return (
        <Menu secondary>
            <Menu.Item active={activeItem === 'all'} onClick={setFilter.bind(this, 'all')} >Все</Menu.Item>
            <Menu.Item active={activeItem === 'popular'} onClick={setFilter.bind(this, 'popular')} >Популярные</Menu.Item>
            <Menu.Item active={activeItem === 'price_high'} onClick={setFilter.bind(this, 'price_high')} >Цена(дорогие)</Menu.Item>
            <Menu.Item active={activeItem === 'price_low'} onClick={setFilter.bind(this, 'price_low')} >Цена(дешёвые)</Menu.Item>
            <Menu.Item active={activeItem === 'author'} onClick={setFilter.bind(this, 'author')} >Автор</Menu.Item>
        </Menu>
    )
};


export default Filter;

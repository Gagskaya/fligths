import React from 'react'

import './Sidebar.scss'
export const Sidebar = ({ sortData }) => {
    return (
        <div className="sidebar">
            <ul className="sidebar__sort">
                <li><h5>Сортировать</h5></li>
                <li onClick={() => sortData('high-price')}><input type="radio" id="asc" defaultChecked name="sort" /> <label htmlFor="asc" > - По возрастанию цены</label></li>
                <li onClick={() => sortData('low-price')}><input type="radio" id="desc" name="sort" /> <label htmlFor="desc"> - По убыванию цены</label></li>
                <li onClick={() => sortData('time')}><input type="radio" id="time" name="sort" /> <label htmlFor="time"> - По времени</label></li>
            </ul>
            <ul className="sidebar__filter">
                <li><h5>Фильтровать</h5></li>
                <li><input type="checkbox" name="check" id="filter-1" /> <label htmlFor="filter-1"> - без пересадок</label></li>
            </ul>
            <ul className="sidebar__price">
                <li><h5>Цена</h5></li>
                <li> <label htmlFor="price-1"> от</label> <input type="text" name="price-1" id="price-1" placeholder="0" /></li>
                <li> <label htmlFor="price-2"> до</label> <input type="text" name="price-2" id="price-2" placeholder="10000" /></li>
            </ul>
        </div>
    )
}

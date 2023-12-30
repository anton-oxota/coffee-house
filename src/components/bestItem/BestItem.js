import { Link } from 'react-router-dom'
import './bestItem.scss'
import React from 'react'

function BestItem({ img, title, price, country }) {
    return (
        <Link to={`products/${country}`} className="best-item">
            <img src={img} alt="" className="best-item__img" />
            <div className="best-item__title">{title}</div>
            <div className="best-item__price">{price}$</div>
        </Link>
    )
}

export default BestItem
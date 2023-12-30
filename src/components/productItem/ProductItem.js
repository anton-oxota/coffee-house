import { Link } from 'react-router-dom'
import './productItem.scss'
import React from 'react'

function ProductItem({ img, country, title, price, id }) {
    return (
        <Link to={`/product/${id}`} className="product-item">
            <img src={img} alt="" className="product-item__img" />
            <h4 className="product-item__title">{title}</h4>
            <h4 className="product-item__country">{country}</h4>
            <h4 className="product-item__price">{price}$</h4>
        </Link>
    )
}

export default ProductItem
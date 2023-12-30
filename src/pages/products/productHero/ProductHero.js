import './productHero.scss'

import React from 'react'


const ProductHero = React.memo(function () {
    return (
        <section className='product-hero'>
            <h2 className="product-hero__title">Our Coffee</h2>
        </section>
    )
})



export default ProductHero
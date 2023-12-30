import './best.scss'
import React, { useContext } from 'react'

import BestItem from '../../../components/bestItem/BestItem'
import { ProductContext } from '../../../App'

function Best() {
    const { bestProducts } = useContext(ProductContext)

    return (
        <section className="best">
            <div className="container">
                <div className="best__text">Our best</div>
                <div className="best__items-wrapper">
                    {bestProducts.map(item => {
                        return <BestItem key={item.id} {...item} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Best
import './productList.scss'
import { useContext, useEffect } from 'react'
import ProductItem from '../../../components/productItem/ProductItem'
import { ProductContext } from '../../../App'
import { useParams } from 'react-router-dom'



function ProductList({ filterInput, filterButtons, setFilterButtons }) {

    const { products } = useContext(ProductContext)
    const { country } = useParams()

    useEffect(() => {
        if (country) {
            setFilterButtons(prev => ([...prev, country]))
        }
    }, [])


    function filterProducts(data) {
        const regExp = new RegExp(filterInput, 'gi')

        const res = data.filter(item => {
            return item.title.match(regExp)
        })

        if (filterButtons.length) {
            return res.filter(item => {
                return filterButtons.includes(item.country)
            })
        }

        return res
    }

    const content = filterProducts(products)

    return (
        <section className="product-list">
            <div className="container">
                <div className="product-list__wrapper">

                    {content.length ? filterProducts(products).map(item => {
                        return <ProductItem key={item.id} {...item} />
                    }) : <div className='product-list__empty'>No results match the filter...</div>}

                </div>
            </div>

        </section>
    )
}

export default ProductList
import { useState } from 'react'

import Header from '../../components/header/Header'
import ProductHero from './productHero/ProductHero'
import ProductAbout from './productAbout/ProductAbout'
import Search from './search/Search'
import ProductList from './productList/ProductList'
import Footer from '../../components/footer/Footer'
import { Helmet } from 'react-helmet'


function ProductsPage() {
    const [filterInput, setFilterInput] = useState('');
    const [filterButtons, setFilterButtons] = useState([]);


    return (
        <>
            <Helmet>
                <title>Our Coffee</title>
                <meta name="title" content="Our Coffee" />
                <meta name="description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at harum laudantium iusto beatae, inventore quae quasi reprehenderit labore natus laborum commodi deleniti ipsum. Amet." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://coffee-house.com/" />
                <meta property="og:title" content="Our Coffee" />
                <meta property="og:description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at harum laudantium iusto beatae, inventore quae quasi reprehenderit labore natus laborum commodi deleniti ipsum. Amet." />
                <meta property="og:image" content="/og_img/our_products.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://coffee-house.com/" />
                <meta property="twitter:title" content="Our Coffee" />
                <meta property="twitter:description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at harum laudantium iusto beatae, inventore quae quasi reprehenderit labore natus laborum commodi deleniti ipsum. Amet." />
                <meta property="twitter:image" content="/og_img/our_products.png" />

            </Helmet>
            <Header />
            <ProductHero />
            <ProductAbout />
            <Search
                setFilterInput={setFilterInput}
                setFilterButtons={setFilterButtons}
                filterButtons={filterButtons} />
            <ProductList
                filterInput={filterInput}
                filterButtons={filterButtons}
                setFilterButtons={setFilterButtons} />
            <Footer />
        </>
    )
}

export default ProductsPage
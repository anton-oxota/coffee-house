import React from 'react'

import Hero from './hero/Hero'
import Header from '../../components/header/Header'
import About from './about/About'
import Best from './best/Best'
import Footer from '../../components/footer/Footer'
import { Helmet } from 'react-helmet'


function Home() {
    return (
        <>
            <Helmet>
                <title>Coffee House</title>
                <meta name="title" content="Coffee House" />
                <meta name="description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at harum laudantium iusto beatae, inventore quae quasi reprehenderit labore natus laborum commodi deleniti ipsum. Amet.z" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://coffee-house.com/" />
                <meta property="og:title" content="Coffee House" />
                <meta property="og:description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at harum laudantium iusto beatae, inventore quae quasi reprehenderit labore natus laborum commodi deleniti ipsum. Amet.z" />
                <meta property="og:image" content="/og_img/home.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://coffee-house.com/" />
                <meta property="twitter:title" content="Coffee House" />
                <meta property="twitter:description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at harum laudantium iusto beatae, inventore quae quasi reprehenderit labore natus laborum commodi deleniti ipsum. Amet.z" />
                <meta property="twitter:image" content="/og_img/home.png" />
            </Helmet>
            <Header />
            <Hero />
            <About />
            <Best />
            <Footer />
        </>
    )
}

export default Home
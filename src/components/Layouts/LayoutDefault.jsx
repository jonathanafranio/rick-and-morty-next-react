import React from "react"
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
const LayoutDefault = (props) => {
    return(
        <>
            <Head>
                <title>Rick And Morty</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Header />
                <main className="container">
                    <section className="page-section">
                        { props.children }
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
export default LayoutDefault;
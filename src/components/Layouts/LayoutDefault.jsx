import React from "react"

import Header from './Header';
import Footer from './Footer';
const LayoutDefault = (props) => {
    return(
        <div>
            <Header />
            <main className="container">
                <section className="page-section">
                    { props.children }
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default LayoutDefault;
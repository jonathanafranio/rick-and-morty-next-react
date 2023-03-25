import React from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../assets/img/logo.png"

const Header = (props) => {
    return(
        <header className="header">
            <div className="container">
                <Link href="/" title="Rick And Morty" className="header__logo">
                    <Image src={ Logo } alt="Rick And Morty" />
                </Link>
            </div>
        </header>
    )
}
export default Header
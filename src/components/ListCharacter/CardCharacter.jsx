import React from "react"
import Link from "next/link"
const CardCharacter = (props) => {
    return (
        <article className="card-post mx-3 md-6 sm-6" id={ props.id_character }>
            <div className="card-post__container">
                <figure className="card-post__figure">
                    <img src={ props.thumb } alt={ props.title } />
                </figure>

                <div className="card-post__text">
                    <span className="card-post__categ">{ props.species }</span>
                    <h3 className="card-post__title">{ props.title }</h3>
                </div>

                <Link href={ `/personagem/${props.id_character}` } className="card-post__link">
                    Ver detalhes
                </Link>
            </div>
        </article>
    )
}

export default CardCharacter;
import Link from "next/link"
const Pagination = (props) => {
    console.log({ props })
    
    const prev_page = () => {
        if(!props.prev) return '';
        const url = props.prev < 2 ? props.prefix_url : `${props.prefix_url}/p/${props.prev}`;
        return `${url}/${props.search}`
    };
    const next_page = () => {
        if(!props.next) return '';
        const url = props.next < props.last ? `${props.prefix_url}/p/${props.next}` : `${props.prefix_url}/p/${props.last}`
        return `${url}/${props.search}`
    };
    const first_page = () => {
        const url = `${props.prefix_url}`
        return `${url}/${props.search}`
    };
    const third_page = () => {
        if(props.prev) return '';
        const url = `${props.prefix_url}/p/3`
        return `${url}/${props.search}`
    }
    const last_page = () => {
        const url = `${props.prefix_url}/p/${props.last}`
        return `${url}/${props.search}`
    };

    return (
        <nav className="pagination">
            { props.active > 1 ? (
                <>
                    <a href={ first_page() } className="pagination__first">Primeira</a>
                    <a href={ prev_page() } className="pagination__prev">Anterior</a>
                </>
            ) : (
                <>
                    <span className="pagination__first -disable">Primeira</span>
                    <span className="pagination__prev -disable">Anterior</span>
                </>
            ) }

            <ul className="pagination__ul">
                { props.prev ? (
                    <li className="pagination__li">
                        <a className="pagination__link" href={ prev_page() }>
                            { props.prev }
                        </a>
                    </li>
                ) : false }

                { props.active ? (
                    <li className="pagination__li">
                        <span className="pagination__link -active">
                            { props.active }
                        </span>
                    </li>
                ) : false }

                { props.next ? (
                    <li className="pagination__li -active">
                        <a className="pagination__link" href={ next_page() }>
                            { props.next }
                        </a>
                    </li>
                ) : false }

                { props.last > 2 && !props.prev  ? (
                    <li className="pagination__li -active">
                        <a className="pagination__link" href={ third_page() }>
                            3
                        </a>
                    </li>
                ) : false }
            </ul>



            { props.active < props.last ? (
                <>
                    <a href={ next_page() } className="pagination__next">Próxima</a>
                    <a href={ last_page() } className="pagination__last">Última</a>

                </>
            ) : (
                <>
                    <span className="pagination__next -disable">Próxima</span>
                    <span className="pagination__last -disable">Última</span>
                </>
            ) }
        </nav>
    )
}

export default Pagination;
import Link from "next/link"
const Pagination = (props) => {
    
    const prev_page = () => {
        const url = props.prev < 2 ? props.prefix_url : `${props.prefix_url}/p/${props.prev}`;
        return `${url}/${props.search}`
    };
    const next_page = () => {
        const url = props.next < props.last ? `${props.prefix_url}/p/${props.next}` : `${props.prefix_url}/p/${props.last}`
        return `${url}/${props.search}`
    };
    const first_page = () => {
        const url = `${props.prefix_url}`
        return `${url}/${props.search}`
    };
    const last_page = () => {
        const url = `${props.prefix_url}/p/${props.last}`
        return `${url}/${props.search}`
    };
    const pages_num = () => {
        const array_pages = [];
        if(props.prev) {
            const obj_prev = {
                number: props.prev,
                link: prev_page()
            }
            array_pages.push(obj_prev);
        }
        const active_page = {
            number: props.active,
            link: ''
        };
        array_pages.push(active_page)

        if(props.next) {
            const obj_next = {
                number: props.next,
                link: next_page()
            };
            array_pages.push(obj_next);
        }

        if(props.active == 1 && props.last > 2) {
            const third = {
                number: 3,
                link: `${props.prefix_url}/p/3/${props.search}`
            };
            array_pages.push(third);
        }

        return array_pages;
    };
    const pagination_arr = pages_num();

    return (
        <nav className="pagination">
            { props.active > 1 ? (
                <>
                    <Link href={ first_page() } className="pagination__first">Primeira</Link>
                    <Link href={ prev_page() } className="pagination__prev">Anterior</Link>
                </>
            ) : (
                <>
                    <span className="pagination__first -disable">Primeira</span>
                    <span className="pagination__prev -disable">Anterior</span>
                </>
            ) }

            <ul className="pagination__ul">
                { pagination_arr.length > 1 ? (
                    pagination_arr.map( (p) => (
                        <li className="pagination__li" key={ p }>
                            <Link 
                                className={ p.number == props.active ? 'pagination__link -active' : 'pagination__link' }
                                href={ p.link }>
                                { p.number }
                            </Link>
                        </li>
                    ) )
                ) : false }
            </ul>



            { props.active < props.last ? (
                <>
                    <Link href={ next_page() } className="pagination__next">Próxima</Link>
                    <Link href={ last_page() } className="pagination__last">Última</Link>

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
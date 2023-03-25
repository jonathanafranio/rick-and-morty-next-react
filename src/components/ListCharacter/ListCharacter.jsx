import { useState, useEffect } from 'react';
import Preload from '../Preload';

const ListCharacter = (props) => {
    const page_num = props.page_num ? props.page_num : 1;
    const { filtro_status, filtro_gender, filtro_name, page_url } = props;
    const search = props.filtro_status ? props.filtro_status : '';
    
    
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(page_num);
    const [characters, setCharacters] = useState([]);
    const [pagination, setPagination] = useState({
        next: null,
        prev: null,
        last: null
    });
    const [error, setError] = useState(false);

    useEffect(() => {
        const baseUrl = `/api/characters/?page=${page_num}`
        const status = filtro_status ? `&status=${filtro_status}` : '';
        const gender = filtro_gender ? `&gender=${filtro_gender}` : '';
        const name = filtro_name ? `&name=${name}` : '';

        const request_url = `${baseUrl}${status}${name}`;

        fetch(request_url)
            .then(r => r.json())
            .then(res => {
                const { results, info } = res
                const newPagination = {
                    next: info.next,
                    prev: info.prev,
                    last: info.pages
                };
                setPagination(newPagination)
                setCharacters(results)
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                setError(true)
            })

    }, [])


    const title = props.title ? props.title : 'Lista de personagens';

    return (
        <div className="character-list">
            <h1 className="page-section__title">{ title }</h1> 

            { error ? (
                <p className="character-list__not-found">
                    Nenhum resultado encontrado. :(
                </p>
            ) : false }

            <ul>
                { characters.map( (character) => (
                    <li>{ character.name }</li>
                ) ) }
            </ul>
            
            { loading ? (
                <Preload />
            ) : false }

        </div>
    )
}

export default ListCharacter;
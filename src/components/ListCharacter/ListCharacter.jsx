import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Preload from '../Preload.jsx';
import CardCharacter from './CardCharacter.jsx'
import Pagination from '../Pagination.jsx';

const ListCharacter = (props) => {
    const router = useRouter();
    const page_num = router.query.p ? router.query.p : 1;
    const { filtro_status, filtro_gender, filtro_name } = props;
    
    
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        if(!router.isReady) return;

        const baseUrl = `/api/characters/?page=${page_num}`
        const status = filtro_status ? `&status=${filtro_status}` : '';
        const gender = filtro_gender ? `&gender=${filtro_gender}` : '';
        const name = filtro_name ? `&name=${filtro_name}` : '';

        const request_url = `${baseUrl}${status}${gender}${name}`;
        
        fetch(request_url)
            .then(r => r.json())
            .then(res => {
                const { results, info } = res
                const newPagination = {
                    ...info,
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
    }, [router.isReady])


    const title = props.title ? props.title : 'Lista de personagens';

    return (
        <div className="character-list">
            <h1 className="page-section__title">{ title }</h1> 

            { error ? (
                <p className="character-list__not-found">
                    Nenhum resultado encontrado. :(
                </p>
            ) : false }

            <div className="character-list__page">
                { characters.map( (character) => (
                    <CardCharacter 
                        key={ character.id }
                        id_character={ character.id } 
                        title={ character.name }
                        species={ character.species }
                        thumb={ character.image } />
                ) ) }
            </div>
            
            { ! loading && pagination.last > 1 ? (
                <Pagination 
                    next={ pagination.next }
                    prev={ pagination.prev }
                    active={ +page_num }
                    last={ pagination.last }
                    prefix_url={ props.page_url }
                    search={ props.search } />
            ) : false }
            
            { loading ? (
                <Preload />
            ) : false }

        </div>
    )
}

export default ListCharacter;
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LayoutDefault from "@/components/Layouts/LayoutDefault";
import ListCharacter from "@/components/ListCharacter/ListCharacter";
const SearchPage = (props) => {
    const router = useRouter();
    const { query, pathname } = router;
   
    const title_search = (obj_search) => {
        const string_replaces = [
            {
                text: 'gender',
                replace: 'Gênero'
            },
            {
                text: 'status',
                replace: 'Status'
            },
            {
                text: 'name',
                replace: 'Nome'
            },
            {
                text: 'alive',
                replace: 'Vivo(a)'
            },
            {
                text: 'dead',
                replace: 'Morto(a)'
            },
            {
                text: 'unknown',
                replace: 'Desconhecido'
            },
            {
                text: 'female',
                replace: 'Feminino'
            },
            {
                text: 'male',
                replace: 'Masculino'
            },
            {
                text: 'genderless',
                replace: 'Sem Gênero'
            }
        ];
        let newStr = JSON.stringify(obj_search).replaceAll('"', '').replace('{', '').replace('}', '');
            newStr = newStr.replaceAll(':', ': ').replaceAll(',', ' e ');

        string_replaces.forEach( item => {
            newStr = newStr.replaceAll(item.text, item.replace)
        })
        console.log({ newStr })
        //setTitle();
        return `Resultado da busca: ${newStr}`;
    };
    //let search_url = JSON.stringify(query).replaceAll('"', '').replace('{', '').replace('}', '');
    //    search_url = search_url.replaceAll(':', '=').replaceAll(',','&');

    const [title, setTitle] = useState();
    //const [filtro_status, setFiltro_status] = useState('');
    //const [filtro_gender, setFiltro_gender] = useState('');
    //const [filtro_name, setFiltro_name] = useState('');
    const [search_url, setSearch_url] = useState('');
    
    console.log({ router })
    

    useEffect(() => {
        if(!router.isReady) return;

        if(!query.name && !query.gender && !query.status) {
            router.push('/');
        }
        console.log({ query })
        let search_query = router.asPath.replace('/search?', '');
        setTitle(title_search(query));
        setSearch_url(search_query);
        //setFiltro_status(query.status);
        //setFiltro_gender(query.gender);
        //setFiltro_name(query.name);

    }, [router.isReady])
    
    return(
        <LayoutDefault>
            <ListCharacter 
                title={ title }
                filtro_status={ query.status }
                filtro_gender={ query.gender }
                filtro_name={ query.name }
                page_url={ pathname }
                search={ search_url }
            />
        </LayoutDefault>
    )
}
export default SearchPage;
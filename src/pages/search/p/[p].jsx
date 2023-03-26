import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LayoutDefault from "@/components/Layouts/LayoutDefault";
import ListCharacter from "@/components/ListCharacter/ListCharacter";
const SearchPagePaged = (props) => {
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
            newStr = newStr.replace(`,p:${query.p}`, '');
            newStr = newStr.replaceAll(':', ': ').replaceAll(',', ' e ');

        string_replaces.forEach( item => {
            newStr = newStr.replaceAll(item.text, item.replace)
        })
        return `Resultado da busca: ${newStr} - página ${query.p}`;
    };

    const [title, setTitle] = useState();
    const [search_url, setSearch_url] = useState('');
    
    useEffect(() => {
        if(!router.isReady) return;

        if(!query.name && !query.gender && !query.status) {
            router.push('/');
        }
        let search_query = router.asPath.replace(`/search/p/${query.p}`, '');
        setTitle(title_search(query));
        setSearch_url(search_query);

    }, [router.isReady])
    
    return(
        <LayoutDefault>
            <ListCharacter 
                title={ title }
                filtro_status={ query.status }
                filtro_gender={ query.gender }
                filtro_name={ query.name }
                page_url={ pathname.replace('/p/[p]', '') }
                search={ search_url }
            />
        </LayoutDefault>
    )
}
export default SearchPagePaged;
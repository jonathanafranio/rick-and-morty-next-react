import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LayoutDefault from "@/components/Layouts/LayoutDefault";
const SearchPage = (props) => {
    const router = useRouter();
    const { query, pathname } = router;
    //console.log({ query, pathname, router })
   
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
    const [title, setTitle] = useState();
    const [filtro_status, setFiltro_status] = useState('');
    const [filtro_gender, setFiltro_gender] = useState('');
    const [filtro_name, setFiltro_name] = useState('');
    
    console.log({ router })
    

    useEffect(() => {
        if(!router.isReady) return;

        if(!query) {
            router.push('/')
        }

        setTitle(title_search(query));
        setFiltro_status(query.status);
        setFiltro_gender(query.gender);
        setFiltro_name(query.name);

    }, [router.isReady])
    
    
    /*
    title: '',
            filtro_status: '',
            filtro_gender: '',
            filtro_name: ''
    */

    return(
        <LayoutDefault>
            <h1>{ title }</h1>
        </LayoutDefault>
    )
}
export default SearchPage;
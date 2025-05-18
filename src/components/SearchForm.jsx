import React, { useState } from "react";
const SearchForm = (props) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
  
    const search_action = (e) => {
        e.preventDefault();

        let search_query = [];
        if(gender.trim() !== "") {
            search_query.push(`gender=${gender}`)
        }
        if(status.trim() !== "") {
            search_query.push(`status=${status}`)
        }
        if(name.trim() !== "" ){
            search_query.push(`name=${name}`)
        }
        search_query = search_query.join('&');
        location.href = `${location.origin}/search/?${search_query}`
    } 
    return(
        <form className="form-search" onSubmit={ e => search_action(e) }>
            <label className="form-search__label" htmlFor="search">Buscar personagem:</label>

            <div className="form-search__wrap">
                <select className="form-search__select" name="status" value={ status } onChange={ e => setStatus(e.target.value) }>
                    <option value="">Status de vida</option>
                    <option value="alive">Vivo(a)</option>
                    <option value="dead">Morto(a)</option>
                    <option value="unknown">Desconhecido</option>
                </select>
            </div>

            <div className="form-search__wrap">
                <select className="form-search__select" name="gender" value={ gender } onChange={ e => setGender(e.target.value) }>
                    <option value="">Todos os Gêneros</option>
                    <option value="female">Feminino</option>
                    <option value="male">Masculino</option>
                    <option value="genderless">Sem Gênero</option>
                    <option value="unknown">Desconhecido</option>
                </select>
            </div>

            <div className="form-search__wrap">
                <input 
                    className="form-search__input" 
                    type="text" 
                    name="name" 
                    placeholder="Por nome" 
                    value={ name } 
                    onChange={ e => setName(e.target.value) } />

                <button className="form-search__btn">
                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="form-search__svg">
                        <path d="M9.75007 18.5001C14.5826     18.5001 18.5001 14.5826 18.5001 9.75007C18.5001 4.91754 14.5826 1 9.75007 1C4.91754 1 1 4.91754 1 9.75007C1 14.5826 4.91754 18.5001 9.75007 18.5001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.9374 15.9377L21 21.0002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default SearchForm;
const CharacterInfo = (props) => {
    const genero_pt = (gender_str) => {
        const genders = {
            Female: "Feminino",
            Male: "Masculino",
            Genderless: "Sem Gênero",
            unknown: "Desconhecido",
            default: gender_str
        }

        return genders[gender_str] || genders.default
    };
    const status_pt = (status_str) => {
        const status = {
            Alive: 'Vivo(a)',
            Dead: 'Morto(a)',
            unknown: 'Desconhecido',
            default: status_str
        }
        return status[status_str] || status.default
    };
    return (
        <div className="character-info">
            <img className="character-info__img" src={ props.image } alt={ props.title } />

            <span className="character-info__txt">
                Nome: <strong>{ props.title }</strong>
            </span>
            <span className="character-info__txt">
                Status: <strong>{ status_pt(props.status) }</strong>
            </span>
            <span className="character-info__txt">
                Espécie: <strong>{ props.species }</strong>
            </span>
            <span className="character-info__txt">
                Gênero: <strong>{ genero_pt(props.gender) }</strong>
            </span>
            <span className="character-info__txt">
                Origem: <strong>{ props.origin }</strong>
            </span>
            <span className="character-info__txt">
                Localização: <strong>{ props.location }</strong>
            </span>
        </div>
    )
}
export default CharacterInfo;
const Episodes = (props) => {
    const { epsodes } = props;
    return(
        <div className="mx-8 episodes">
            <h2 className="episodes__title">Lista de episódios:</h2>
            <table className="episodes__table">
                <tr className="episodes__tr">
                    <th>Código:</th>
                    <th>Nome:</th>
                </tr>
                { epsodes.map( (ep) => (
                    <tr className="episodes__tr" key={ ep.episode }>
                        <td>{ ep.episode }</td>
                        <td>
                            <strong>
                                { ep.name }
                            </strong>
                        </td>
                    </tr>
                ) ) }
            </table>
        </div>
    )
}
export default Episodes;
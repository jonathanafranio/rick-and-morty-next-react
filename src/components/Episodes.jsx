const Episodes = (props) => {
    const { epsodes } = props;
    return(
        <div className="mx-8 episodes">
            <h2 className="episodes__title">Lista de episódios:</h2>
            <table className="episodes__table">
                <thead>
                    <tr className="episodes__tr">
                        <th>Código:</th>
                        <th>Nome:</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
        </div>
    )
}
export default Episodes;
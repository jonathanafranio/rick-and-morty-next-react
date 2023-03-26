export default async function personagem(req, res) {
    console.log({ req });
    const parameters = req.query;
    const { id } = parameters;
    if(!id) {
        res.status(400).json({erro: 'id do personagem não informado.'})
    }

    const variables = {};
    const query = `{\n
        character(id: ${id}) {\n
            id\n
            name\n
            image\n
            status\n
            species\n
            gender\n
            origin {\n
                name\n
            }\n
            location {\n
                name\n
            }\n
            episode {\n
                name\n
                episode\n
            }\n
        }\n
    }`;

    const option_req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query, variables: variables })
    }

    const personagem = await fetch(`https://rickandmortyapi.com/graphql`, option_req)
        .then(r => r.json())
        .then(r => r.data.character)
        .catch(e => e);

    res.status(200).json(personagem)

}
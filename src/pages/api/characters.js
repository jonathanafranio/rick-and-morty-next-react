export default async function characters(req, res) {
    const parameters = req.query;
    const { page, status, gender, name } = parameters;
    //console.log({page, status, gender, name})
    //const characters = await fetch(`https://rickandmortyapi.com/api/character`).then(r => r.json());
    const variables = {};
    const query = `{\n
        characters(page: ${page? page : 1}, filter: {status: \"${status ? status : ''}\" gender: \"${gender ? gender : ''}\" name: \"${name ? name : '' }\"}) {\n
            info {\n
                pages\n
                count\n
                next\n
                prev\n
            }\n
            results {\n
                id\n
                name\n
                species\n
                image\n
            }\n
        }\n
    }`;
    const option_req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables })
    };
    const req_url = 'https://rickandmortyapi.com/graphql';
    const characters = await fetch(req_url, option_req)
        .then(r => r.json())
        .then(r => r.data.characters)
        .catch(erro => erro);
        
    res.status(200).json(characters)
} ;
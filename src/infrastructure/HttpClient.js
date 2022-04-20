//Arquitetura Hexagonal
// Ports & Adapters

async function HttpClient(fetchUrl, fetchOptions) {
    return fetch(fetchUrl, {
                ...fetchOptions,
                headers: {
                    'Content-Type': 'application/json',
                    ...fetchOptions.headers,
                },
                body: fetchOptions.body ? JSON.stringify(fetchOptions.body): null,
            })
            .then( async respostaDoServidor => {
                return {
                    ok: respostaDoServidor.ok,
                    status: respostaDoServidor.status,
                    statusText: respostaDoServidor.statusText,
                    body: await respostaDoServidor.json(),
                }
            }
    );
}

export default HttpClient;
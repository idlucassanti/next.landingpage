const authService = {
    async login(credenciais) {
        return fetch(`${process.env.NEXT_PUBLIC_URL_AUTENTICACAO}/Auth/Autenticar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credenciais)
        }).then(async response => {
            if(!response.ok) throw new Error('Usuário ou senha inválidos');
            
            const data = await response.json();
            console.log(data);
        })
    }
}

export default authService;
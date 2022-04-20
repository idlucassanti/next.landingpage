import HttpClient from "../infrastructure/HttpClient";

const authService = {
    async login(credenciais) {
        return await HttpClient(`${process.env.NEXT_PUBLIC_URL_AUTENTICACAO}/Auth/Autenticar`, {
            method: 'POST',
            body: credenciais
        })
        .then(async response => {
            if (!response.ok) throw new Error('Usuário ou senha inválidos');
            return {
                body: response.body,
            }
        })
    }
}

export default authService;
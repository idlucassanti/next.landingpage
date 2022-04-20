import { useRouter } from "next/router";
import { useState } from 'react';
import authService from '../services/authService';

function Login(props) {
    const router = useRouter();
    const [credenciais, setCredencias] = useState({
        email: 'lucassanti_@hotmail.com',
        password: '#Santi123'
    });

    function handleChange(e) {
        e.preventDefault();

        const field = e.target.name;
        const value = e.target.value;

        setCredencias((currentValues) => {
            return {
                ...currentValues,
                [field]: value
            }
        })
    }

    //onsubmit -> controler -> pega dados do usuário e passa para um serviço
    //authService -> serviço
    async function handleSubmit(e) {
        e.preventDefault();
        await authService
            .login(credenciais)
            .then(() => {
                router.push('/home')
            })
            .catch(err => {
                alert('Usuário ou senha inválidos');
            });
    }


    return (
        <div>
            <h1>
                Página de Login
            </h1>
            <form 
                type="submit" 
                onSubmit={handleSubmit}
            >
                <input name='email' label='E-mail' onChange={handleChange} value={credenciais.email}/>
                <input name='password' label='Senha' onChange={handleChange} value={credenciais.password}/>
                <button>Entrar</button>
            </form>
            <pre>
                {
                    JSON.stringify(credenciais, null, 4)
                }
            </pre>
        </div>
    );
}

export default Login;
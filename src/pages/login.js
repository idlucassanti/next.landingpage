import { useRouter } from "next/router";
import { useState } from 'react';
import authService from '../services/authService';

function Login(props) {
    const router = useRouter();
    const [credenciais, setCredencias] = useState({
        email: '',
        password: ''
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
    function handleSubmit(e) {
        e.preventDefault();
        authService
            .login(credenciais)
            .then(() => {
                router.push('/home')
            })
            .catch(() => {
                alert('Algo deu errado na requisição, tente novamente!');
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
                <input name='email' label='E-mail' onChange={handleChange}/>
                <input name='password' label='Senha' onChange={handleChange}/>
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
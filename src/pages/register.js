function Register(props) {
    return (
        <div>
            <h1>
                Página de Registro
            </h1>
            <pre>
                {
                    JSON.stringify(props, null, 4)
                }
            </pre>
        </div>
    );
}

export default Register;
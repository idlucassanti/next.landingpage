function Home(props) {
    return (
        <div>
            <h1>
                Página Home com os Dash
            </h1>
            <pre>
                {
                    JSON.stringify(props, null, 4)
                }
            </pre>
        </div>
    );
}

export default Home;
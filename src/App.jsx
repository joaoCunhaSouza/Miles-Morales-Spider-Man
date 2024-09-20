import React from 'react';
import Content from './pages/Content';
import Image from './pages/Image';
import './style/style.css';

function App() {
    const [loading, setLoading] = React.useState(true);
    const [fadeOut, setFadeOut] = React.useState(false);

    React.useEffect(() => {
        // Temporizador para manter o carregamento por 10 segundos
        const loadingTimer = setTimeout(() => {
            setFadeOut(true); // Inicia a transição de fade-out do carregamento
            const fadeOutTimer = setTimeout(() => {
                setLoading(false); // Após o fade-out, mostra o conteúdo completamente
            }, 2000); // Tempo para o fade-out de 2 segundos

            return () => clearTimeout(fadeOutTimer); // Limpa o temporizador de fade-out
        }, 8000); // Tempo total de carregamento de 8 segundos

        return () => clearTimeout(loadingTimer); // Limpa o temporizador de carregamento
    }, []);

    return (
        <div className="container">
            {loading ? (
                <div className={`fade-out ${fadeOut ? 'fade-out-active' : ''}`}>
                    <Image />
                </div>
            ) : (
                <div className={`fade-in ${!loading ? 'fade-in-active' : ''}`}>
                    <Content />
                </div>
            )}
        </div>
    );
}

export default App;

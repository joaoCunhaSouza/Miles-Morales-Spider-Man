import React from 'react';
import Content from './pages/Content';
import Image from './pages/Image';
import './style/style.css';

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <Image /> : <Content />}
    </div>
  );
}

export default App;

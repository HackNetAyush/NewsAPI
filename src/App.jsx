import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './Components/NavBar/Nav.jsx';
import NewsBlock from './Components/NewsBlock/NewsBlock.jsx';
import NewsComponent from './Components/ChatGPT/NewsComponent.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div className="main">
        {/* <NewsBlock imgsrc="" title="" desc="" source="" />

        <NewsBlock />
        <NewsBlock /> */}
        <NewsComponent />
      </div>
    </>
  );
}

export default App;

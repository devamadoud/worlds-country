import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Pages/About';
import Error404 from './Pages/Error404';
import Home from './Pages/Home';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/about" element={<About />}/>
          {/* si jamais l'utilisateur demande une page qui n'existe pas, on va afficher une page 404 */}
          <Route path="*" element={<Error404 />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

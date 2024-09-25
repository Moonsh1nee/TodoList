import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Header } from './components/Header.jsx';
import './scss/app.scss'
import { Registration } from './pages/Registration/index.jsx';
import { Login } from './pages/Login/index.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

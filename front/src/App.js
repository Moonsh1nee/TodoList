import React from 'react';
import './scss/app.scss'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Registration } from './pages/Registration/index.jsx';
import { Login } from './pages/Login/index.jsx';
import { Header } from './components/Header.jsx';
import { PreLoader } from './components/PreLoader/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth.js';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const isUserLoading = user.status === 'loaded';
  
  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [])
  
  return (
    <>
      <Header />
      <Routes>
        {isUserLoading ? <Route path="/" element={<Home />} /> : <Route path="/" element={<PreLoader /> } />}
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

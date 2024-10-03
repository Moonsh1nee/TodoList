import React from 'react';
import './scss/app.scss'
import 'react-responsive-modal/styles.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Header } from './components';
import { PreLoader } from './components/PreLoader';
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

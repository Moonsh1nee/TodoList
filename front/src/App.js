import React from 'react';
import './scss/app.scss'
import 'react-responsive-modal/styles.css';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Header } from './components';
import { PreLoader } from './components/PreLoader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth.js';
import {Home} from "./pages/Home";

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
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

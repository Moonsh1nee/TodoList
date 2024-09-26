import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectIsAuth} from "../redux/slices/auth.js";

export const Header = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const onClickLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            dispatch(logout())
            window.localStorage.removeItem('token');
        }
    };

    return (
        <header className='header'>
            <div className="header__wrapper">
                <div className="header__left">
                    <button type="submit" className='btn__main-menu'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='icon icon--menu'>
                            <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z"/>
                        </svg>
                    </button>

                    <Link to="/" className="header__logo">
                        <svg className='icon icon--logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="m439-240 221-221-54-54-167 167-81-82-55 54 136 136ZM263.72-96Q234-96 213-117.15T192-168v-624q0-29.7 21.15-50.85Q234.3-864 264-864h312l192 192v504q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72ZM528-624v-168H264v624h432v-456H528ZM264-792v189-189 624-624Z"/>
                        </svg>
                        <div className="logo__text">
                            <span className="logo__text-name">Moonsh1ne</span>
                            <h1 className="logo__text-slogan">todoList</h1>
                        </div>
                    </Link>
                </div>

                <div className="header__account">
                    {isAuth ? (
                        <>
                            <div className="header__account-wrapper">
                                <img src="https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg" alt="account logo" className="header__account-img" />
                                <span className="header__account-name">Vlad Akimov</span>
                            </div>
                            <button onClick={onClickLogout} type="submit" className='btn btn--logout'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='icon icon--logout'>
                                    <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h264v72H216Zm432-168-51-51 81-81H384v-72h294l-81-81 51-51 168 168-168 168Z"/>
                                </svg>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to='/login'>
                                <button className='btn btn--login'>Войти</button>
                            </Link>

                            <Link to='/register'>
                                <button className='btn btn--register'>Зарегестрироваться</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
};
import {useDispatch, useSelector} from "react-redux";
import {fetchRegister, selectIsAuth} from "../../redux/slices/auth";
import {useForm} from "react-hook-form";
import {Navigate} from "react-router-dom";

export const Registration = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({
        defaultValues: {
            nickName: '',
            fullName: '',
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values))
        if (!data.payload) {
            return alert('Error register!')
        }
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        }
    }

    if (isAuth) {
        return <Navigate to='/'/>
    }

    return (
        <main className="main__form">
            <div className="form__wrapper">
                <h2 className="form__title">Create account</h2>
                 <img src="https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg" alt="account logo" className="form__img" />
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__item">
                        <label htmlFor="nickName">Nickname</label>
                        <input
                        id="nickName" 
                        type="text" 
                        name="nickName"
                        placeholder='nickname' 
                        {...register('nickName', { required: 'Nickname is required' })}
                        />
                        {errors.nickName && <p>{errors.nickName.message}</p>}
                    </div>

                    <div className="form__item">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                        id="fullName" 
                        type="text" 
                        name="fullName"
                        placeholder='full name' 
                        {...register('fullName', { required: 'Full Name is required' })}
                        />
                        {errors.fullName && <p>{errors.fullName.message}</p>}
                    </div>

                    <div className="form__item">
                        <label htmlFor="email">Email</label>
                        <input
                        id="email" 
                        type="email" 
                        name="email"
                        placeholder='email' 
                        {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className="form__item">
                        <label htmlFor="password">Password</label>
                        <input
                        id="password" 
                        type="password" 
                        name="password"
                        placeholder='password' 
                        {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <button className="btn" type="submit" disabled={!isValid}>Register</button>
                 </form>
            </div>
        </main>
    )
}
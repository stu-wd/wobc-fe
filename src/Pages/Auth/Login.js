import React, { useContext, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';

const initialFormValues = {
    username: '',
    password: ''
}

// const initialFormErrors = {
//     username: '',
//     password: '',
// }

const Login = (props) => {
    const { setLoggedIn, setUser } = useAuth();
    const navigate = useNavigate()

    const [ formValues, setFormValues ] = useState(initialFormValues)
    // const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    // const [ disabled, setDisabled ] = useState(true)

    const onChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
        // setFormValues({
        //     ...formValues,
        //     [name]: value
        // })
    }

    const onLogin = (e) => {
        e.preventDefault()
        const loginAttempt = {
            username: formValues.username,
            password: formValues.password
        }

        axios.post(`http://localhost:3000/api/auth/login`, loginAttempt)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                setLoggedIn(true);
                setUser(res.data.user)
                navigate('/dashboard')
            })
            .catch(err => {
                console.log('err', err);
            })
    }

    return (
        <div>
            <form onSubmit={onLogin}>
                <label>
                    Username:
                    <input 
                        type='text'
                        name='username'
                        onChange = {onChange}
                        value = {formValues.username}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type = 'password'
                        name = 'password'
                        onChange = {onChange}
                        value = {formValues.password}
                    />
                </label>

                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
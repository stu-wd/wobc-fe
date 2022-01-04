import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
    username: '',
    password: '',
    name: ''
};

// const initialFormErrors = {
//     name: '',
//     username: '',
//     email: '',
//     password: '',
//     role_id: ''
// }

const Register = () => {

    const [ formValues, setFormValues ] = useState(initialFormValues)
    const navigate = useNavigate()

    // const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    // const [ disabled, setDisabled ] = useState(true)

    const onChange = e => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const formSubmit = (e) => {
        e.preventDefault()
        const newAccount = {
            username: formValues.username.trim(),
            name: formValues.name.trim(),
            password: formValues.password.trim()
        }
        console.log(newAccount)
        axios.post(`http://localhost:3000/api/auth/register`, newAccount)
            .then(() => {
                navigate('/login')
            })
            .catch(err => {
                console.log('err: ', err)
            })
    }

   return (
        <>
            <form onSubmit={formSubmit}>
                <label>
                    Name:
                    <input
                        type = 'text'
                        name = 'name'
                        onChange = {onChange}
                        value = {formValues.name}
                    />
                </label>

                <label>
                    Username:
                    <input
                        type = 'text'
                        name = 'username'
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

                <button>Submit</button>         
            </form>
        </>
    );
};

export default Register;
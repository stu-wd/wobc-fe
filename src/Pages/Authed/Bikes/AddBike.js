import React, { useState } from 'react';
import { useAuth } from './../../../Contexts/AuthContext';
import authedAxios from '../../../Utils/authedAxios';

const initialFormValues = {
    serial: '',
    future: '',
    condition: '',
    type: '',
    size: '',
    brand: '',
    gender: '',
    kidadult: '',
    received: '',
    storage: '',
}

const AddBike = () => {
    const { user } = useAuth()

    const [ formValues, setFormValues ] = useState(initialFormValues)
    // const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    // const [ disabled, setDisabled ] = useState(true)

    // change handler
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

    // axios [POST] upon submission
    const formSubmit = (e) => {
        e.preventDefault();
        const newBike = { // how could I write a function to do this? -- revisit
            serial: formValues.serial.trim(),
            future: formValues.future.trim(),
            condition: formValues.condition.trim(),
            type: formValues.type.trim(),
            size: formValues.size.trim(),
            brand: formValues.brand.trim(),
            gender: formValues.gender.trim(),
            kidadult: formValues.kidadult.trim(),
            received: formValues.received.trim(),
            storage: formValues.storage.trim(),
            user_id: user.user_id
        };
        authedAxios()
        .post(`/bikes/add`, newBike)
        .then(res => {
            console.log('res: ', res.data);
        })
        .catch(err => {
            console.log('err: ', err)
        })
        .finally(
            setFormValues(initialFormValues))
   };

   return (
        <div>
            <form onSubmit = {formSubmit}>
                <label>
                    Serial:
                    <input
                        type = 'text'
                        name = 'serial'
                        onChange = {onChange}
                        value = {formValues.serial}
                    />
                </label>
                
                <label>
                    Future:
                    <input 
                        // will be a drop down of available categories
                        type = 'text'
                        name = 'future'
                        onChange = {onChange}
                        value = {formValues.future}
                    />
                </label>

                <label>
                    condition:
                    <input
                        type = 'text'
                        name = 'condition'
                        onChange = {onChange}
                        value = {formValues.condition}
                    />
                </label>

                <label>
                    Type:
                    <input
                        type = 'text'
                        name = 'type'
                        onChange = {onChange}
                        value = {formValues.type}
                    />
                </label>

                <label>
                    Size:
                <input
                    type = 'text'
                    name = 'size'
                    onChange = {onChange}
                    value = {formValues.size}
                />
                </label>

                <label>
                    Brand:
                <input
                    type = 'text'
                    name = 'brand'
                    onChange = {onChange}
                    value = {formValues.brand}
                />
                </label>

                <label>
                    Gender:
                <input
                    type = 'text'
                    name = 'gender'
                    onChange = {onChange}
                    value = {formValues.gender}
                />
                </label>

                <label>
                    Kid/Adult:
                <input
                    type = 'text'
                    name = 'kidadult'
                    onChange = {onChange}
                    value = {formValues.kidadult}
                />
                </label>

                <label>
                    Received:
                <input
                    type = 'text'
                    name = 'received'
                    onChange = {onChange}
                    value = {formValues.received}
                />
                </label>

                <label>
                    Storage:
                <input
                    type = 'text'
                    name = 'storage'
                    onChange = {onChange}
                    value = {formValues.storage}
                />
                </label>

                <button>Add New Class</button>
            </form>
        </div>
    );
};

export default AddBike;
import React, { useState } from 'react';
import { useAuth } from './../../../Contexts/AuthContext';
import authedAxios from '../../../Utils/authedAxios';
import fd from './FormData';

const AddBike = () => {
    const { user } = useAuth()

    const [ formValues, setFormValues ] = useState(fd.initialFormValues)
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

    const formSubmit = (e) => {
        e.preventDefault();
        const newBike = { // how could I write a function to do this? -- revisit
            serial: formValues.serial.trim(),
            future: formValues.future,
            condition: formValues.condition,
            type: formValues.type,
            size: formValues.size,
            brand: formValues.brand,
            gender: formValues.gender,
            kidadult: formValues.kidadult,
            received: formValues.received,
            storage: formValues.storage,
            user_id: user.user_id
        };
        authedAxios()
        .post(`/bikes/add`, newBike)
        .then(res => {
            console.log('res: ', res.data);
            setFormValues(fd.initialFormValues)
        })
        .catch(err => {
            console.log('err: ', err)
        })
   };

   return (
        <div>
            <form onSubmit={formSubmit}>
                <label htmlFor="serial">
                    Serial:
                </label>
                    <input
                        type='text'
                        name='serial'
                        onChange={onChange}
                        value={formValues.serial}
                    />
                
                <label htmlFor='future'>
                    Future:
                </label>
                    <select name='future' value={formValues.future} onChange={onChange}>
                        <option value='' disabled hidden></option>
                        {fd.futures.map((future, index) => {
                            return(
                                <option key={index} value={`${future}`}>{`${future}`}</option>
                            )
                        })}
                    </select>

                <label>
                    Condition:
                </label>
                    <select name='condition' value={formValues.condition} onChange={onChange}>
                        <option value='' disabled hidden></option>
                        {fd.conditions.map((condition, index) => {
                            return(
                                <option key={index} value={`${condition}`}>{`${condition}`}</option>
                            )
                        })}
                    </select>


                <label>
                    Type:
                </label>
                    <select name='type' value={formValues.type} onChange={onChange}>
                        <option value='' disabled hidden></option>
                        {fd.types.map((type, index) => {
                            return(
                                <option key={index} value={`${type}`}>{`${type}`}</option>
                            )
                        })}
                    </select>

                <label>
                    Size:
                </label>
                    <select name='type' value={formValues.type} onChange={onChange}>
                        <option value='' disabled hidden></option>
                        {fd.sizes.map((size, index) => {
                            return(
                                <option key={index} value={`${size}`}>{`${size}`}</option>
                            )
                        })}
                    </select>

                <label>
                    Brand:
                </label>
                    <select name='brand' value={formValues.brand} onChange={onChange}>
                        <option value='' disabled hidden></option>
                        {fd.brands.map((brand, index) => {
                            return(
                                <option key={index} value={`${brand}`}>{`${brand}`}</option>
                            )
                        })}
                    </select>

                <label>
                    Gender:
                </label>
                    <select name='gender' value={formValues.gender} onChange={onChange}>
                        <option value='' disabled hidden></option>
                        {fd.genders.map((gender, index) => {
                            return(
                                <option key={index} value={`${gender}`}>{`${gender}`}</option>
                            )
                        })}
                    </select>

                <label>
                    Kid/Adult:
                </label>
                    <select name='kidadult' value={formValues.kidadult} onChange={onChange}>
                        <option value='' disabled hidden></option>
                        {fd.kidadult.map((ka, index) => {
                            return(
                                <option key={index} value={`${ka}`}>{`${ka}`}</option>
                            )
                        })}
                    </select>

                <label>
                    Received:
                </label>
                    <select name='received' value={formValues.received} onChange={onChange}>
                        <option value='' disabled hidden></option>
                        {fd.received.map((location, index) => {
                            return(
                                <option key={index} value={`${location}`}>{`${location}`}</option>
                            )
                        })}
                    </select>

                <label>
                    Storage:
                </label>
                    <select name='storage' value={formValues.storage} onChange={onChange}>
                        <option value='' disabled hidden></option>
                        {fd.storages.map((storage, index) => {
                            return(
                                <option key={index} value={`${storage}`}>{`${storage}`}</option>
                            )
                        })}
                    </select>

                <button>Add New Bike</button>
            </form>
        </div>
    );
    // return(
    //     <></>
    // )
};

export default AddBike;
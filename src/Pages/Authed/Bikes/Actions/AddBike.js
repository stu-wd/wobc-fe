import React, { useState } from 'react';
import authedAxios from '../../../../Utils/authedAxios';
import { useAuth } from '../../../../Contexts/auth.context';
import fd from '../FormData';
import { useUserInfo } from '../../../../Contexts/user.context';
import { Button, Form, Input, Radio, Select, Space } from 'antd'

const AddBike = () => {
    // const { user } = useAuth()
    const { user } = useUserInfo()

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

   const addBike = (e) => {
       e.preventDefault()
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
        .post(`/bikes/add/`, newBike)
        .then(res => {
            setFormValues(fd.initialFormValues)
        })
        .catch(err => {
            console.log('err: ', err)
        })
   }

   const editBike = (e) => {
       e.preventDefault()
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
        .put(`/bikes/edit/`, newBike)
        .then(res => {
            setFormValues(fd.initialFormValues)
        })
        .catch(err => {
            console.log('err: ', err)
        })
   }


    const [ componentSize, setComponentSize ] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size)
    }

    const onFinish = (values) => {
        console.log(values);
      };

    // const onReset = () => {
    //     form.resetFields();
    // };


    const handleSelect = (value) => {
        console.log(`selected value ${value}`);
    }


   return (
        <div className='m-5 bg-blue-900 p-2 text-blue-200'>
            <h2 className="pb-1 text-2xl">Add New Bike</h2>
            <Form
                // {...layout}
                // form={form}
                // layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                onFinish={onFinish}
                className="flex flex-col justiy-around"
                >

            {/* {the size selector} */}
            {/* <Form.Item label="Go back and make this an interactive thing" name="size">
                <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item> */}

            <Form.Item label="Serial" className='flex py-2 pl-2 text-xl'>
                <Input name='serial'  className="ml-5"/>
            </Form.Item>

            {fd.options.map(option => {
                if (option.name === 'Brand' || option.name === 'Size' || option.name === 'Received')  {
                    return(
                        <Form.Item label={option.name} key={option.name} className='flex p-2 my-1 text-xl'>
                             <select name={option.name} onChange={handleSelect} className="ml-5 text-gray-900">
                                 {option.choices.map(choice =>{
                                     return(
                                        <option value={choice}>{choice}</option>
                                     )
                                     })}
                             </select>
                         </Form.Item>
                    )
                } else {
                    return(
                        <Form.Item label={option.name} className="p-2 my-1 text-xl">
                             <Radio.Group name={option.name} onChange={onChange} className="flex flex-col pl-3 ">
                                     {option.choices.map(choice => {
                                         return(
                                             <Radio.Button value={choice}> {choice}
                                             </Radio.Button>
                                         )
                                     })}
                             </Radio.Group>
                         </Form.Item>
                    )
                }
            })}
            
            </Form>
            </div>
    );
};

export default AddBike;
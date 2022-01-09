import React, { useState } from 'react';
import authedAxios from '../../../../Utils/authedAxios';
import { useAuth } from '../../../../Contexts/auth.context';
import fd from '../FormData';
import { useUserInfo } from '../../../../Contexts/user.context';
import { Button, Checkbox, Col, Form, Input, Radio, Row, Select, Space } from 'antd'

const AddBike = () => {
//     // const { user } = useAuth()
//     const { user } = useUserInfo()
//     const [form] = Form.useForm()

//     const [ formValues, setFormValues ] = useState(fd.initialFormValues)
//     // const [ formErrors, setFormErrors ] = useState(initialFormErrors)
//     // const [ disabled, setDisabled ] = useState(true)

//     // change handler
//     const onChange = (e) => {
//         const { name, value } = e.target
//         setFormValues({
//             ...formValues,
//             [name]: value
//         })
//         // setFormValues({
//         //     ...formValues,
//         //     [name]: value
//         // })
//     }

//    const addBike = (e) => {
//        e.preventDefault()
//         const newBike = { // how could I write a function to do this? -- revisit
//             serial: formValues.serial.trim(),
//             future: formValues.future,
//             condition: formValues.condition,
//             type: formValues.type,
//             size: formValues.size,
//             brand: formValues.brand,
//             gender: formValues.gender,
//             kidadult: formValues.kidadult,
//             received: formValues.received,
//             storage: formValues.storage,
//             user_id: user.user_id
//         };
//         console.log(newBike)
//        authedAxios()
//         .post(`/bikes/add/`, newBike)
//         .then(res => {
//             console.log(res.data)
//             setFormValues(fd.initialFormValues)
//         })
//         .catch(err => {
//             console.log('err: ', err)
//         })
//    }

//    const editBike = (e) => {
//        e.preventDefault()
//         const newBike = { // how could I write a function to do this? -- revisit
//             serial: formValues.serial.trim(),
//             future: formValues.future,
//             condition: formValues.condition,
//             type: formValues.type,
//             size: formValues.size,
//             brand: formValues.brand,
//             gender: formValues.gender,
//             kidadult: formValues.kidadult,
//             received: formValues.received,
//             storage: formValues.storage,
//             user_id: user.user_id
//         };
//        authedAxios()
//         .put(`/bikes/edit/`, newBike)
//         .then(res => {
//             setFormValues(fd.initialFormValues)
//         })
//         .catch(err => {
//             console.log('err: ', err)
//         })
//    }


//     const [ componentSize, setComponentSize ] = useState('default');

//     const onFormLayoutChange = ({ size }) => {
//         setComponentSize(size)
//     }

//     const onFinish = (values) => {
//         console.log(values);
//       };

//     // const onReset = () => {
//     //     form.resetFields();
//     // };


//     const handleSelect = (value) => {
//         console.log(`selected value ${value}`);
//     }

//     const capitalize = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1)
//     }

    const [form] = Form.useForm()
    console.log(form)

    const onFinish = values => {
        console.log(values);
    }

    const onReset = () => {
        form.resetFields()
    }

   return (
       <Form
        form={form}
        name='Bike Form'
        onFinish={onFinish}
       >
           <Form.Item
            name='serial'>

           </Form.Item>
           
       </Form>
        // <div className='m-5 bg-blue-900 p-2 text-blue-200'>
        //     <h2 className="pb-1 text-2xl">Add New Bike</h2>
        //     <Form
        //         form={form}
        //         className="flex flex-col justiy-around"
        //         // initialValues={fd.initialFormValues}
        //         onFinish={onFinish}
        //     >


        //     {/* {the size selector} */}
        //     {/* <Form.Item label="Go back and make this an interactive thing" name="size">
        //         <Radio.Group>
        //         <Radio.Button value="small">Small</Radio.Button>
        //         <Radio.Button value="default">Default</Radio.Button>
        //         <Radio.Button value="large">Large</Radio.Button>
        //         </Radio.Group>
        //     </Form.Item> */}

        //     <Form.Item label="Serial" className='flex py-2 pl-2 text-xl'>
        //         <Input name='serial' onChange={onChange} className="ml-5"/>
        //     </Form.Item>

        //     {fd.options.map(option => {
        //         if (option.name === 'brand' || option.name === 'size' || option.name === 'received')  {
        //             return(
        //                 <Form.Item label={capitalize(option.name)} key={option.name} className='flex p-2 my-1 text-xl'>
        //                      <select defaultValue='' name={option.name} onChange={onChange} className="ml-5 text-gray-900">
        //                          <option value='' disabled hidden>Select...</option>
        //                          {option.choices.map(choice =>{
        //                              return(
        //                                 <option key={choice} value={choice}>{choice}</option>
        //                              )
        //                              })}
        //                      </select>
        //                  </Form.Item>
        //             )
        //         } else {
        //             return(
        //                 <Form.Item key={option.name} label={capitalize(option.name)} className="p-2 my-1 text-xl">
        //                      <Checkbox.Group name={option.name} className="flex flex-col pl-3 ">
        //                          <Row>
        //                              {option.choices.map(choice => {
        //                                  return(
        //                                      <Col span={8}>
        //                                          <Checkbox onChange={onChange}value={choice}>{choice}</Checkbox>
        //                                     </Col>
        //                                  )
        //                                 })}
        //                         </Row>
        //                      </Checkbox.Group>
        //                  </Form.Item>
        //             )
        //         }
        //     })}

        //     <Button type='primary' htmlType='submit'>Add</Button>
        //     </Form>
        //     </div>
    );
};

export default AddBike;
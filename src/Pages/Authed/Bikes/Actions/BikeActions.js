
import React, { useEffect, useRef, useState } from 'react';
import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd'
import fd from '../FormData'
import { useBikes } from '../../../../Contexts/bikes.context';
import { capitalize } from './../../../../Utils/capitalize'
import { useAuth } from '../../../../Contexts/auth.context';
// import { useParams } from 'react-router-dom';

const BikeActions = (props) => {
    const { successMsg, postBike, editBike, resetMessage, serialSearchDetails } = useBikes()
    const { user } = useAuth()
    const [ form ] = Form.useForm()

    const onFinish = (values) => {
        console.log(values)
        const { user_id } = user
        values.user_id = user_id
        // postBike(values)
        editBike(values)
    }

    const onFinishFailed = (error) => {
        console.log(`Failed: ${error}`);
    }
    
    const { serialMatch } = props

    useEffect(() => {
        form.resetFields()
    }, [serialMatch])

    return (
        <div
            style={{ border: '3px solid black'}}>
        <Form
            form={form}
            name='bike'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={props.serialMatch ? { 
                serial: serialMatch.serial,
                future: serialMatch.future,
                brand: serialMatch.brand,
                condition: serialMatch.condition,
                type: serialMatch.type,
                gender: serialMatch.gender,
                kidadult: serialMatch.kidadult,
                size: serialMatch.size,
                received: serialMatch.received,
                storage: serialMatch.storage } : {}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            scrollToFirstError
            className='m-5 p-2 text-neutral-900'
            >

            <Form.Item
                label="Serial"
                name="serial"
                rules={[{ required: true }]}
                className='flex py-2 pl-2 text-x'
            >
                <Input style={{ border: '2px solid black' }}/>
            </Form.Item>

            {fd.options.map(option => {
                return(
                    <Form.Item
                        label={option.name === 'kidadult' ? 'Kid/Adult' : capitalize(option.name)}
                        name={option.name}
                        className='flex py-2 pl-2 text-xl'
                        rules={option.name === 'future' ? [{ required: true }] : [{ required: false }]}
                        key={option.name}
                        >                
                        <select
                        >
                            <option value='none'>None</option>
                            {option.choices.map(choice => {
                                return(
                                    <option key={choice} value={choice}>{choice}</option>
                                    )
                                })}
                        </select>
                    </Form.Item>
                )
            })}

            
            {
                props.serialMatch ? 
                <>
                    <Button
                    type='primary'
                    htmlType='submit'
                    className='border-solid border-2 border-black bg-rose-700 text-white p-2'
                    >
                    edit bike
                    </Button>

                    <Button
                    type='primary'
                    htmlType='submit'
                    className='border-solid border-2 border-black bg-rose-700 text-white p-2'
                    >
                    Delete bike
                    </Button>
                </>

                :
                <>
                    <Button
                    type='primary'
                    htmlType='submit'
                    className='border-solid border-2 border-black bg-rose-700 text-white p-2'
                    >
                    Add new bike
                    </Button>
                </>
            }
            

            <div>
                {successMsg === 'Success' ?
                        <>
                            {successMsg}
                            {form.resetFields()}
                            {resetMessage()}
                        </>
                        :
                        <>
                        </>}

                {successMsg === 'Edit Success' ?
                <> 
                    {successMsg}
                    {resetMessage()}
                </>
                :
                <>
                </>}

                {successMsg === 'Edit Failed' ?
                        <>
                            {successMsg}
                        </>
                        :
                        <>
                        </>}
            </div>     
        </Form>
        </div>

    );
};

export default BikeActions;

// const handleSelect = (value) => {
    //     console.log(`selected ${value}`);
    // }

    // const handleCheck = (e) => {
    //     console.log(`e.target `,e.target.checked);
    //     setChecked(!checked)
    // }

    // const bikeActions = e => {
    //     console.log(e.target)
    //     if (e.target.textContent === 'Add') {
    //         addBike()
    //     }
    // }

            {/* {addBikeDetails.value ? 
                addBikeDetails.value.map(bike => {
                    console.log(`add bike details: ${bike}`)
                })
                // console.log(`add bike details: ${addBikeDetails.value}`)
                :
                console.log(`no addbikedetails`)
            } */}

    // let url = 'http://localhost:4000/api/bike/add'

    // const state = useAsync(async () => {
    //     // authedAxios()
    //         // .post(url, bike)
    //         // .then(res => {
    //         //         console.log(`async res ${res.data}`);
    //         //     })
    //         // .catch(err => console.log(err))
    //     const response = await fetch(url)
    //     const result = await response.text()
    //     return result
    //     setAsyncData(result)
    // },[url])

    // let url = 'http://localhost:4000/api/users/'

    // const [ asyncBike, doFetch ] = useAsyncFn(async () => {
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         mode: 'cors',
    //         cache: 'no-cache',
    //         credentials: 'same-origin',
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         },
    //         redirect: 'follow',
    //         referrerPolicy: 'no-referrer'
    //     })
    //     const result = await response.json()
    //     return result
    // }, [url])

{/* {
                asyncData ?
                    asyncData.map(user => {
                        return(
                            <>
                            {user.username}</>
                        )
                    })
                :
                <></>
            } */}

            {/* {console.log(asyncBike.value.map(user =>{
                console.log(user.username)
            }))}
            { typeof asyncBike.value === Object ? 
                <>array</>
                :
                <></>
            } */}

                   {/* {asyncBike.loading
                ? <div>Loading...</div>
                : asyncBike.error
                ? <div>Error: {asyncBike.error.message}</div>
                : <div>Value: {asyncBike.value} {console.log(asyncBike)}</div>
            } */}
            {/* <Button
                type='primary'     
                htmlType='submit'      
                onClick={bikeActions}      
                >
                Save Edit
                </Button>
                
                <Button
                type='primary'
                htmlType='submit'
                onClick={bikeActions}
                >
                Delete Bike
            </Button> */}


            {/* <input type='submit' name='button1' value='add' /> */}

{/* {fd.options.map(option => {
    if (option.name === 'brand' || option.name === 'size' || option.name === 'received'){
                    return(
                        <Form.Item
                            label={option.name}
                            name={option.name}
                            >                
                            <select
                                onChange={handleSelect}
                            >
                                {option.choices.map(choice => {
                                    return(
                                        <option value={choice}>{choice}</option>
                                        )
                                    })}
                            </select>
                        </Form.Item>
                    )
                } else {
                    return(
                        <Form.Item label={capitalize(option.name)} className="p-2 my-1 text-xl">
                            <Checkbox.Group name={option.name} className="flex flex-col pl-3 ">
                                <Row>
                                    {option.choices.map(choice => {
                                        return(
                                            <Col span={8}>
                                                <Checkbox checked={checked} onChange={handleCheck} value={choice}>{choice}</Checkbox>
                                            </Col>
                                        )
                                        })}
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>
                    )
                }
            })} */}
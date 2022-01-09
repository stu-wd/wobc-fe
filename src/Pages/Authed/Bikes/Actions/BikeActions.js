
import React, { useEffect, useRef, useState } from 'react';
import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd'
import fd from '../FormData'
import { useBikes } from '../../../../Contexts/bikes.context';
import { capitalize } from './../../../../Utils/capitalize'

const BikeActions = () => {
    const { addBike, successMsg } = useBikes()
    const [form] = Form.useForm()

    const onFinish = (values) => {
        addBike(values)
        form.resetFields()
    }

    const onFinishFailed = (error) => {
        console.log(`Failed: ${error}`);
    }

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

    return (
        <Form
            form={form}
            name='bike'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{  }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            // className='m-5 bg-blue-900 p-2 text-blue-200'
        >
            <h2 className="pb-1 text-2xl">Add New Bike</h2>

            <Form.Item
                label="Serial"
                name="serial"
                rules={[{ required: true }]}
                className='flex py-2 pl-2 text-x'
                // style={{ border: '2px solid black' }}
            >
                <Input style={{ border: '2px solid black' }}/>
            </Form.Item>

            {fd.options.map(option => {
                return(
                    <Form.Item
                        label={option.name === 'kidadult' ? 'Kid/Adult' : capitalize(option.name)}
                        name={option.name}
                        className='flex py-2 pl-2 text-xl'
                        >                
                        <select
                        >
                            <option value='none'>None</option>
                            {option.choices.map(choice => {
                                <option value='none'>None</option>
                                return(
                                    <option value={choice}>{choice}</option>
                                    )
                                })}
                        </select>
                    </Form.Item>
                )
            })}

            <Button
                type='primary'
                htmlType='submit'
            >
                Add
            </Button>

            { successMsg ? 
                <>Success</>
            :
                <>Attempt Failed</>}

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
        </Form>
    );
};

export default BikeActions;

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
import React, { useEffect, useRef, useState } from "react";
import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import fd from "../Options/formData";
import { useBikes } from "../../../Contexts/bikes.context";
import { capitalize } from "../../../Utils/capitalize";
import { useAuth } from "../../../Contexts/auth.context";

const BikeActions = (props) => {
  const { successMsg, postBike, editBike, resetMessage, serialSearchDetails } =
    useBikes();
  const { user } = useAuth();
  const [form] = Form.useForm();
  const [POST, setPOST] = useState();
  const [PUT, setPUT] = useState();

  const onFinishPOST = (values) => {
    console.log(values);
    const { user_id } = user;
    values.user_id = user_id;
    postBike(values);
  };

  const onFinishPUT = (values) => {
    console.log(values);
    const { user_id } = user;
    values.user_id = user_id;
    editBike(values);
  };

  const onFinishFailed = (error) => {
    console.log(`Failed: ${error}`);
  };

  const { serialMatch } = props;

  useEffect(() => {
    form.resetFields();
  }, [serialMatch]);

  const changeToPOST = () => {
    setPUT(false);
    setPOST(true);
  };

  const changeToPUT = () => {
    setPOST(false);
    setPUT(true);
  };

  return (
    <div style={{ border: "3px solid black" }}>
      <Form
        form={form}
        name="bike"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={
          props.serialMatch
            ? {
                serial: serialMatch.serial,
                status: serialMatch.status,
                brand: serialMatch.brand,
                condition: serialMatch.condition,
                type: serialMatch.type,
                gender: serialMatch.gender,
                kidadult: serialMatch.kidadult,
                size: serialMatch.size,
                received: serialMatch.received,
                storage: serialMatch.storage,
              }
            : {}
        }
        onFinish={POST ? onFinishPOST : onFinishPUT}
        onFinishFailed={onFinishFailed}
        scrollToFirstError
        className="m-5 p-2 text-neutral-900"
      >
        {/* { serialMatch ?
                <>{`edit form for serial: ${serialMatch.serial}`}</>
                :
                <Form.Item
                    label="Serial"
                    name="serial"
                    rules={[{ required: true }]}
                    className='flex py-2 pl-2 text-x'
                >
                    <Input style={{ border: '2px solid black' }}/>
                </Form.Item>
            } */}

        <Form.Item
          label="Serial"
          name="serial"
          rules={[{ required: true }]}
          className="flex py-2 pl-2 text-x"
        >
          <Input style={{ border: "2px solid black" }} />
        </Form.Item>

        {fd.options.map((option) => {
          return (
            <Form.Item
              label={
                option.name === "kidadult"
                  ? "Kid/Adult"
                  : capitalize(option.name)
              }
              name={option.name}
              className="flex py-2 pl-2 text-xl"
              rules={
                option.name === "status"
                  ? [{ required: true }]
                  : [{ required: false }]
              }
              key={option.name}
            >
              <select>
                <option value="none">None</option>
                {option.choices.map((choice) => {
                  return (
                    <option key={choice} value={choice}>
                      {choice}
                    </option>
                  );
                })}
              </select>
            </Form.Item>
          );
        })}

        {props.serialMatch ? (
          <>
            <Button
              type="primary"
              htmlType="submit"
              className="border-solid border-2 border-black bg-rose-700 text-white p-2"
              onClick={changeToPUT}
            >
              edit bike
            </Button>

            {/* <Button
                    type='primary'
                    htmlType='submit'
                    className='border-solid border-2 border-black bg-rose-700 text-white p-2'
                    >
                    Delete bike
                    </Button> */}
          </>
        ) : (
          <>
            <Button
              type="primary"
              htmlType="submit"
              className="border-solid border-2 border-black bg-rose-700 text-white p-2"
              onClick={changeToPOST}
            >
              Add new bike
            </Button>
          </>
        )}

        <div>
          {successMsg === "Add Success" ? (
            <>
              {successMsg}
              {form.resetFields()}
              {resetMessage()}
            </>
          ) : (
            <></>
          )}

          {successMsg === "Edit Success" ? (
            <>
              {successMsg}
              {resetMessage()}
            </>
          ) : (
            <></>
          )}

          {successMsg === "Edit Failed" ? <>{successMsg}</> : <></>}
        </div>
      </Form>
    </div>
  );
};

export default BikeActions;

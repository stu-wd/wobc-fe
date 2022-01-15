import { Button, Form, Input, Radio } from "antd";
import { useBikes } from "../../Contexts/bikes.context";
import { capitalize } from "../../Utils/capitalize";
import { useAuth } from "../../Contexts/auth.context";
import fd from "../Bikes/Options/formData";
import manufacturers from "./Options/brands";
import { useState } from "react";

const BikeForm = () => {
  const { user } = useAuth();
  const [form] = Form.useForm();
  const { postBike } = useBikes();

  const [filteredData, setFilteredData] = useState([]);
  const [brand, setBrand] = useState();

  const onFinish = (values) => {
    values["brand"] = brand;
    values.user_id = user.user_id;
    postBike(values);
  };

  const onFinishFailed = (values) => {
    console.log(values);
  };

  const onSearch = (search) => {
    if (search === "") return;
    const newFilter = manufacturers.filter((value) =>
      value.includes(search.toLowerCase())
    );

    newFilter.map((match) => {
      setBrand(match);
      setFilteredData(match);
    });
  };

  const FormItem = ({ label, name, rules, type, choices }) => (
    <Form.Item label={label} name={name}>
      {type === "input" ? (
        <Input placeholder={`${name}`} />
      ) : type === "checkbox" ? (
        <Radio.Group className="radio-group" options={choices} />
      ) : type === "select" ? (
        <select choices={choices}>
          <option disabled selected hidden value="">
            {name}
          </option>
          {choices.map((choice) => {
            return (
              <option key={choice} value={choice}>
                {choice}
              </option>
            );
          })}
        </select>
      ) : type === "search" ? (
        <>
          <Input.Search
            // onChange={onChange}
            choices={choices}
            onSearch={onSearch}
            placeholder={brand != undefined ? brand : "search brands"}
          />
          {filteredData.length != 0 && `success! ${filteredData} is set`}
        </>
      ) : (
        <></>
      )}
    </Form.Item>
    // type === 'input' && <Form.Item name={name}><Input placeholder={name} /></Form.Item>
    // type === 'checkbox' && <Form.Item name={name} label={name}><Radio.Group className="radio-group" options={choices} /</Form.Item>
  );

  return (
    <Form
      form={form}
      name="bike-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      scrollToFirstError
    >
      {fd.options.map((option) => {
        return (
          <FormItem
            label={
              option.name === "kidadult"
                ? "Kid/Adult"
                : option.type === "input"
                ? ""
                : option.type === "select"
                ? ""
                : option.type === "search"
                ? ""
                : capitalize(option.name)
            }
            name={option.name}
            type={option.type}
            choices={option.choices}
            key={option.name}
          />
        );
      })}

      <Button className="button" type="primary" htmlType="submit">
        Add bike
      </Button>
    </Form>
  );
};

export default BikeForm;

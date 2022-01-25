import React, { useEffect, useState } from "react";
import { useBikes } from "../../../../Contexts/bikesContext";
import { useAuth } from "../../../../Contexts/authContext";
import { BiSearchAlt } from "react-icons/bi";
import BikeForm from "../BikeForm";
import BikeCard from "../BikeCard";
import fd from "../../Form/data/formData";
import { MyRadio } from "../../Form/formInputs";
import { Form, Formik, Field } from "formik";

const SearchBike = () => {
  const {
    getBikes,
    searchSerial,
    searchResults,
    searchByParamsResults,
    searchByParams,
  } = useBikes();
  const { user } = useAuth();

  useEffect(() => {
    searchResults.value = undefined;
    getBikes();
  }, []);

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search === "" || undefined) return;
    searchSerial(search.toUpperCase());
  };

  const [params, setParams] = useState();

  return (
    <>
      <div className="mt-4 relative">
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <div
          onClick={handleSearch}
          className="absolute right-1 top-2 cursor-pointer"
        >
          <BiSearchAlt size={28} />
        </div>
        <Formik
          initialValues={{}}
          onSubmit={(values, actions) => {
            console.log("values: !! == ", values);
            let params = {};
            for (let key in values) {
              params[key] = values[key][0];
            }
            console.log(params);
            searchByParams(params);
          }}
        >
          <Form>
            <div id="checkbox-group">Checked</div>
            <div role="group" aria-labelledby="checkbox-group">
              {fd.options.map((option) => {
                return (
                  <div>
                    {option.name.toUpperCase()}:
                    {option.choices &&
                      option.name != "brand" &&
                      option.choices.map((choice) => {
                        return (
                          <label>
                            {choice}
                            <Field
                              type="checkbox"
                              name={option.name}
                              value={choice}
                            />
                          </label>
                        );
                      })}
                  </div>
                );
              })}
            </div>
            <button className="button" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      {/* {searchResults.value && searchResults.value.length === 0 && (
        <>No results</>
      )} */}
      {/* {searchResults.value &&
        searchResults.value.map((match) => {
          return (
            <>
              <BikeCard match={match} />
            </>
          );
        })} */}
      {searchByParamsResults.value &&
        searchByParamsResults.value.map((match) => {
          return <BikeCard match={match} />;
        })}
    </>
  );
};

export default SearchBike;

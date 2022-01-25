import React, { useEffect, useState } from "react";
import { useBikes } from "../../../../Contexts/bikesContext";
import { useAuth } from "../../../../Contexts/authContext";
import { BiSearchAlt } from "react-icons/bi";
import BikeForm from "../BikeForm";
import BikeCard from "../BikeCard";
import fd from "../../Form/data/formData";
import { MyRadio, MyTextField } from "../../Form/formInputs";
import { Form, Formik, Field } from "formik";
import Circles from "react-loading-icons/dist/components/circles";

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
              if (key === "serial" || key === "wobc_id" || key === "brand") {
                params[key] = values[key].toUpperCase();
              } else {
                params[key] = values[key][0];
              }
            }
            console.log(params);
            searchByParams(params);
          }}
        >
          <Form className="border-2 border-yellow-300 flex flex-col">
            <div className="">
              <div className="border-2 border-pink-400 grid grid-cols-2">
                {fd.options.map((option) => {
                  return option.choices && option.name != "brand" ? (
                    <div className="flex flex-col border-2 border-red-500">
                      {option.name}:
                      {option.choices.map((choice) => {
                        return (
                          <label className="m-1 flex flex-row border-cyan-400 border-2">
                            {choice}
                            <Field
                              type="checkbox"
                              name={option.name}
                              value={choice}
                              className="m-1 border-2 border-orange-500"
                            />
                          </label>
                        );
                      })}{" "}
                    </div>
                  ) : (
                    <MyTextField
                      className="flex flex-col border-2 border-red-500"
                      name={option.name}
                    />
                  );
                })}
              </div>
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

      {searchByParamsResults.loading === true && <Circles />}
      {console.log(searchByParamsResults)}
      {searchByParamsResults.value &&
        searchByParamsResults.value.length === 0 && <div>Nothin' for ya</div>}

      {searchByParamsResults.value &&
        searchByParamsResults.value.map((match) => {
          return <BikeCard match={match} />;
        })}
    </>
  );
};

export default SearchBike;
